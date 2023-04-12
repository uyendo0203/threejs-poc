import React from "react";
import { Canvas } from "@react-three/fiber";

import GableEnd from "../Gable/GableEnd";
import GableStart from "../Gable/GableStart";
import LeftRoofSheet from "../RoofSheet/Left";
import RightRoofSheet from "../RoofSheet/Right";

const Roof = () => {
  return (
    <React.Fragment>
      <LeftRoofSheet />
      <RightRoofSheet />
      <GableStart />
      <GableEnd />
    </React.Fragment>
  );
};

export default Roof;
