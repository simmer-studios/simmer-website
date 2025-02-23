"use client";

import Matter, {
  Bodies,
  Body,
  Composite,
  Engine,
  Mouse,
  MouseConstraint,
  Render,
  Runner,
  Svg,
  Vector,
  World
} from "matter-js";
// eslint-disable
// @ts-ignore-
import MatterWrap from "matter-wrap"; // needs to disable eslint here because no declaration file is found for matter-wrap
// eslint-enable
import { useEffect, useRef } from "react";

import Egg from "@/components/icons/HalfEgg";

const THICCNESS = 100;

const FallingEggs = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Engine>(undefined);
  const compositeRef = useRef<Composite>(undefined);
  const runnerRef = useRef<Runner>(undefined);
  const renderRef = useRef<Render>(undefined);
  const bodies = useRef<Record<string, Body>>(undefined);

  Matter.use(MatterWrap);

  const handleResize = () => {
    if (containerRef.current && renderRef.current && bodies.current) {
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      /* reset the canvas size */
      renderRef.current.canvas.width = width;
      renderRef.current.canvas.height = height;

      /* reset the position of the ground */
      Body.setPosition(
        bodies.current.ground,
        Vector.create(width / 2, height + THICCNESS / 2)
      );

      Body.setPosition(
        bodies.current.rightWall,
        Vector.create(width + THICCNESS, height / 2)
      );
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (containerRef.current && !engineRef.current) {
      const container = {
        width: containerRef.current.clientWidth,
        height: containerRef.current.clientHeight
      };

      const engine = Engine.create();
      const world = engine.world;
      const render = Render.create({
        element: containerRef.current,
        engine: engine,
        options: {
          width: container.width,
          height: container.height,
          background: "transparent",
          wireframeBackground: "transparent",
          wireframes: false
        }
      });

      engineRef.current = engine;
      renderRef.current = render;

      engine.gravity.scale = 0.00987;

      // create world elements

      const box = Bodies.rectangle(
        container.width / 2,
        container.height / 2,
        80,
        80,
        {
          friction: 1,
          // frictionAir: 0.09,
          density: 0.1,
          restitution: 0.6,
          plugin: {
            wrap: {
              min: { x: 0, y: 0 },
              max: { x: container.width, y: container.height }
            }
          },
          render: {}
        }
      );

      const leftWall = Bodies.rectangle(
        0 - THICCNESS,
        container.height / 2,
        THICCNESS,
        container.height,
        {
          isStatic: true
        }
      );

      const rightWall = Bodies.rectangle(
        container.width + THICCNESS,
        container.height / 2,
        THICCNESS,
        container.height,
        {
          isStatic: true
        }
      );

      const ground = Bodies.rectangle(
        container.width / 2,
        container.height + THICCNESS / 2,
        container.width,
        THICCNESS,
        {
          isStatic: true
        }
      );

      bodies.current = {
        box,
        ground,
        leftWall,
        rightWall
      };

      // add all of the bodies into the world
      const composite = Composite.add(world, [
        ground,
        leftWall,
        rightWall,
        box
      ]);
      compositeRef.current = composite;

      // add mouse control
      const mouse = Mouse.create(render.canvas);
      const mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false
          }
        }
      });

      mouseConstraint.mouse.element.addEventListener("click", (event) => {
        spawnEgg(mouse.position.x, mouse.position.y);
      });

      World.add(world, mouseConstraint);
      render.mouse = mouse;

      // run the renderer
      Render.run(render);

      // create runner
      const runner = Runner.create();
      runnerRef.current = runner;

      // run the engine
      Runner.run(runner, engine);
    }
  }, [containerRef]);

  const spawnEgg = (x: number, y: number) => {
    if (containerRef.current && compositeRef.current && engineRef.current) {
      const container = {
        width: containerRef.current.clientWidth,
        height: containerRef.current.clientHeight
      };

      const egg = Bodies.rectangle(x, y, 80, 80, {
        friction: 1,
        density: 0.1,
        restitution: 0.6,
        plugin: {
          wrap: {
            min: { x: 0, y: 0 },
            max: { x: container.width, y: container.height }
          }
        }
      });

      Composite.add(compositeRef.current, [egg]);
    }
  };

  return (
    <div
      ref={containerRef}
      className="absolute bottom-0 left-0 right-0 top-0 z-20 h-full w-full"
    />
  );
};

export default FallingEggs;
