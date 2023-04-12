import { Canvas } from "@react-three/fiber";
import { WALL_HEIGHT } from "../../../constants";

const BackWall = (props) => {
  return (
    <mesh position={[-4, WALL_HEIGHT / 2, 0]} rotation={[0, Math.PI * 1.5, 0]}>
      <boxBufferGeometry args={[4, WALL_HEIGHT, 0]} />
      <meshStandardMaterial color={"#FFF"} />
    </mesh>
  );
};

export default BackWall;
