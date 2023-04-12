import { Canvas } from "@react-three/fiber";
import { WALL_HEIGHT, ROOF_HEIGHT } from "../../../constants";

const GableStart = () => {
  return (
    <mesh position={[4, WALL_HEIGHT + ROOF_HEIGHT / 2, 0]} rotation={[0, 0, 0]}>
      <coneGeometry args={[2, ROOF_HEIGHT, 2]} />
      <meshStandardMaterial color={"#b35f45"} />
    </mesh>
  );
};

export default GableStart;
