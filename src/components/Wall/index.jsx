import { Canvas } from "@react-three/fiber";
import { WALL_HEIGHT } from "../../constants";
import FrontWall from "./Front";
import BackWall from "./Back";
import RightWall from "./Right";
import LeftWall from "./Left";
import React from "react";

const Wall = (props) => {
  return (
    <React.Fragment>
      <LeftWall />
      <RightWall />
      <BackWall />
      <FrontWall />
    </React.Fragment>
  );
};

export { FrontWall, BackWall, RightWall, LeftWall };

export default Wall;
