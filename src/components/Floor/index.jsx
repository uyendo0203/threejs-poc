import { Canvas } from "@react-three/fiber";

const Floor = () => {
  return (
    <mesh rotation={[-Math.PI * 0.5, 0, 0]}>
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial color={"#95AC78"} />
    </mesh>
  );
};

export default Floor;
