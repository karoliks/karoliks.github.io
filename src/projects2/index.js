import React, {useEffect, useRef} from "react";
import ReactDOM from "react-dom";
import Matter from "matter-js";

function Scene (props) {
 
 const scene = useRef(null)

  useEffect(()=>{
    var Engine = Matter.Engine,
      Render = Matter.Render,
      World = Matter.World,
      Bodies = Matter.Bodies,
      Mouse = Matter.Mouse,
      MouseConstraint = Matter.MouseConstraint;

    var engine = Engine.create({
      positionIterations: 20
    });

    var render = Render.create({
      element: scene.current,
      engine: engine,
      options: {
        // width: window.innerWidth,
        // height: window.innerHeight,
        // wireframes: false
      }
    });

    World.add(engine.world, [
      // walls
      Bodies.rectangle(0, 0, window.innerWidth, 10, { isStatic: true, render: { fillStyle: '#aebdf5' } }),
      Bodies.rectangle(0,  window.innerHeight, window.innerWidth, 10, { isStatic: true, render: { fillStyle: '#aebdf5' } }),
      Bodies.rectangle(window.innerHeight, 0, 10, window.innerHeight,  { isStatic: true, render: { fillStyle: '#aebdf5' } }),
      Bodies.rectangle(0, window.innerWidth, 10, window.innerHeight,  { isStatic: true, render: { fillStyle: '#aebdf5' } }),
    ]);

 
    const floor = Bodies.rectangle(150, 300, 300, 20, {
      isStatic: true,
      render: {
        fillStyle: 'blue',
      },
    })

    const ball = Bodies.circle(150, 0, 10, {
      restitution: 0.9,
      render: {
        fillStyle: 'yellow',
      },
    })

    World.add(engine.world, [floor, ball])

     // translate keycodes to directions
  function handleKeyDown(e) {

    e.preventDefault();
    switch (e.keyCode) {
      // case 32: // space
      //   return handleSpace();
      case 37: // left
        return Matter.Body.applyForce(ball, {x: ball.position.x, y: ball.position.y}, {x: -0.005, y: 0});
      case 38: // up
        return Matter.Body.applyForce(ball, {x: ball.position.x, y: ball.position.y}, {x: 0, y: -0.005});
      case 39: // rigth
        Matter.Body.applyForce(ball, {x: ball.position.x, y: ball.position.y}, {x: 0.005, y: 0});
      case 40: // down
        return Matter.Body.applyForce(ball, {x: ball.position.x, y: ball.position.y}, {x: 0, y: 0.005});
      default:
        return true;
    }
  }

  window.addEventListener("keydown", (e) => {
      handleKeyDown(e);
  });

  // // New ball
  // function handleSpace(){
  //     World.add(engine.world, Bodies.circle(150, 50, 30, { restitution: 0.7 }));
  // }

    Engine.run(engine);

    Render.run(render);
  },[])

    return (<div ref={scene} />);
}
export default Scene;
