import { Canvas } from "@react-three/fiber";
import { WALL_HEIGHT, ROOF_COLOR } from "../../../constants";

const LeftRoofSheet = ({ color = ROOF_COLOR, height = WALL_HEIGHT }) => {
  return (
    <mesh position={[0, height + 0.5001, -1.0001]} rotation={[Math.PI * 0.35, 0, 0]}>
      <boxBufferGeometry args={[8, height / 1.74, 0]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default LeftRoofSheet;
