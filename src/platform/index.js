import React, {PureComponent} from "react"; // todo: gå vekkk fra vomponent
import "./index.css";
import Matter from "matter-js";
import { collisionCategories } from "./constants";

const engine = Matter.Engine.create()


function Renderer() {
  return(
    <div style={{backgroundColor: "red"}}>
      <h1>Tile</h1>
    </div>
  )
}

class Box extends PureComponent {
  render() {
    const size = 100;
    const x = this.props.x - size / 2;
    const y = this.props.y - size / 2;
    const angle = this.props.body.angle;
    return (
      <div style={{ position: "absolute", width: size, height: size, backgroundColor: "red", left: x, top: y , angle: angle}} />
    );
  }
}

function Platform (world = engine.world, pos, angle, width, category = 0x0002) {
  let height = 20;
  let body = Matter.Bodies.rectangle(pos.x, pos.y, width, height, {
    isStatic: true,
    angle: angle,
    friction: 1,
    collisionFilter: {
      category: collisionCategories.platform,
      mask: collisionCategories.barrel
    }
  });

  let vertices = [
    { x: pos.x - width / 2, y: pos.y - height / 2 },
    { x: pos.x + width / 2, y: pos.y - height / 2 },
    { x: pos.x - width / 2, y: pos.y + height / 2 },
    { x: pos.x + width / 2, y: pos.y + height / 2 }
  ];

  Matter.Vertices.rotate(vertices, body.angle, body.position);

  Matter.World.add(world, [body]);

  //-- These are all the components our platform entities will need.
  //-- Notice the renderer component? Our GameEngine will only draw entities that contain
  //-- a renderer component - the rest will not get displayed.
  return {
    platform: { vertices},
    body,
    size: { width, height },
    // renderer: <Renderer />
    renderer: <Box />
  };
};

export default Platform;