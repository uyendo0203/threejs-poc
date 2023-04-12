import { Canvas } from "@react-three/fiber";
import { WALL_HEIGHT } from "../../../constants";

const RightWall = (props) => {
  return (
    <mesh position={[0, WALL_HEIGHT / 2, -2]}>
      <boxBufferGeometry args={[8, WALL_HEIGHT, 0]} />
      <meshStandardMaterial color={"#FFF"} />
    </mesh>
  );
};

export default RightWall;
