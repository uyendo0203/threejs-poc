import { Canvas } from "@react-three/fiber";
import { WALL_HEIGHT } from "../../constants";

const Door = () => {
  return (
    <mesh position={[0, 1.1, WALL_HEIGHT / 2 + 0.0001]}>
      <planeGeometry args={[2.2, 2.2, 100, 100]} />
      <meshStandardMaterial color={"#ff0000"} />
    </mesh>
  );
};

export const DoorLight = (props) => {
  return <pointLight intensity={1} color={"#ff7d46"} position={[0, 2.2, 2, 7]} distance={10} />;
};

export default Door;
