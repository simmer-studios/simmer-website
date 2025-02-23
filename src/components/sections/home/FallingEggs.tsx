"use client";

import { Bodies, Composite, Engine, Render, Runner } from "matter-js";
import { RefObject, useEffect, useRef, useState } from "react";

const FallingEggs = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Engine>(undefined);
  const compositeRef = useRef<Composite>(undefined);
  const runnerRef = useRef<Runner>(undefined);
  const renderRef = useRef<Render>(undefined);

  useEffect(() => {
    if (containerRef.current && !engineRef.current) {
      const container = containerRef.current.getBoundingClientRect();

      console.log(container.width);

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

      // create world elements
      const box = Bodies.rectangle(container.width / 2, 0, 80, 80, {
        frictionAir: 0.02,
        restitution: 0.09
      });
      const ground = Bodies.rectangle(0, container.height + 2, 4000, 2, {
        isStatic: true
      });

      // add all of the bodies into the world
      Composite.add(world, [box, ground]);
      compositeRef.current = Composite.add(world, [box, ground]);

      // run the renderer
      Render.run(render);

      // create runner
      const runner = Runner.create();
      runnerRef.current = runner;

      // run the engine
      Runner.run(runner, engine);
    }
  }, [containerRef]);

  return (
    <div
      ref={containerRef}
      className="absolute bottom-0 left-0 right-0 top-0 h-full w-full"
    />
  );
};

export default FallingEggs;
