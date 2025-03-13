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
  Vector,
  World
} from "matter-js";
// eslint-disable
// @ts-ignore-
import MatterWrap from "matter-wrap"; // needs to disable eslint here because no declaration file is found for matter-wrap
// eslint-enable
import {
  forwardRef,
  HTMLProps,
  useEffect,
  useImperativeHandle,
  useRef,
  WheelEvent
} from "react";

const THICCNESS = 100;

// Extend Matter.js Mouse type to include the event handlers
interface ExtendedMouse extends Mouse {
  mousedown: (event: Event) => void;
  mousemove: (event: Event) => void;
  mouseup: (event: Event) => void;
}

export type FallingEggsRef = {
  spawnEgg: () => void;
};

const FallingEggs = forwardRef<FallingEggsRef>((props, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Engine>(undefined);
  const compositeRef = useRef<Composite>(undefined);
  const runnerRef = useRef<Runner>(undefined);
  const renderRef = useRef<Render>(undefined);
  const bodies = useRef<Record<string, Body>>(undefined);
  const touchStartY = useRef<number>(0);
  const isScrolling = useRef<boolean>(false);

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

  /* scene resize */
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* scene setup */
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
        ground,
        leftWall,
        rightWall
      };

      // add all of the bodies into the world
      const composite = Composite.add(world, [ground, leftWall, rightWall]);
      compositeRef.current = composite;

      // add mouse control
      const mouse = Mouse.create(render.canvas) as ExtendedMouse;
      const mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false
          }
        }
      });

      // Disable default touch handling from Matter.js
      if (mouse.element) {
        mouse.element.removeEventListener("touchstart", mouse.mousedown);
        mouse.element.removeEventListener("touchmove", mouse.mousemove);
        mouse.element.removeEventListener("touchend", mouse.mouseup);
      }

      // Custom touch handling that allows scrolling
      let touchId: number | null = null;

      render.canvas.addEventListener(
        "touchstart",
        (e) => {
          if (touchId === null) {
            touchId = e.touches[0].identifier;
            const touch = e.touches[0];
            mouse.position.x = touch.clientX;
            mouse.position.y = touch.clientY;
            mouse.mousedown(e);
          }
        },
        { passive: true }
      );

      render.canvas.addEventListener(
        "touchmove",
        (e) => {
          for (let i = 0; i < e.touches.length; i++) {
            if (e.touches[i].identifier === touchId) {
              const touch = e.touches[i];
              mouse.position.x = touch.clientX;
              mouse.position.y = touch.clientY;
              mouse.mousemove(e);
              break;
            }
          }
        },
        { passive: true }
      );

      render.canvas.addEventListener(
        "touchend",
        (e) => {
          if (touchId !== null) {
            touchId = null;
            mouse.mouseup(e);
          }
        },
        { passive: true }
      );

      if ("mousewheel" in mouseConstraint.mouse) {
        mouseConstraint.mouse.element.removeEventListener(
          "wheel",
          mouseConstraint.mouse.mousewheel as (
            this: HTMLElement,
            ev: globalThis.WheelEvent
          ) => void
        );
      }

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

  const spawnEgg = () => {
    if (containerRef.current && compositeRef.current && engineRef.current) {
      const container = {
        width: containerRef.current.clientWidth,
        height: containerRef.current.clientHeight
      };

      const egg = Bodies.circle(Math.random() * container.width, 0, 60, {
        angle: Math.random() * Math.PI,
        friction: 0.5,
        density: 0.1,
        restitution: 1,
        plugin: {
          wrap: {
            min: { x: 0, y: 0 },
            max: { x: container.width, y: container.height }
          }
        },
        render: {
          sprite: {
            texture: "images/img_egg.png",
            xScale: 0.8,
            yScale: 0.8
          }
        }
      });

      Composite.add(compositeRef.current, [egg]);
    }
  };

  useImperativeHandle(ref, () => ({
    spawnEgg
  }));

  return (
    <div
      ref={containerRef}
      className="absolute bottom-0 left-0 right-0 top-0 z-20 h-full w-full"
    />
  );
});

FallingEggs.displayName = "FallingEggs";

export default FallingEggs;
