import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Floor from "../Floor";
import Wall from "../Wall";
import Roof from "../Roof";
import Door, { DoorLight } from "../Door";
import { WALL_HEIGHT, ROOF_HEIGHT } from "../../constants";

const WareHouse = () => {
  const cameraConfig = {
    near: 0.1,
    far: 100,
    position: [2, 5, 7],
  };
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Canvas camera={cameraConfig}>
        <OrbitControls />
        <ambientLight intensity={0.1} color={"#FFF"} />
        <directionalLight intensity={0.1} color={"#fff"} position={[-4, 5, 2]} />
        <Floor />
        <Wall />
        <Roof />
        <Door />
        <DoorLight />
      </Canvas>
    </div>
  );
};

export default WareHouse;
