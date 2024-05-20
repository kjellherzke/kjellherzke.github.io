import {
  MeshTransmissionMaterial,
  Environment,
  Lightformer,
  ContactShadows,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { easing } from "maath";

export default function Render() {
  return (
    <Canvas
      style={{
        width: "50vw",
        height: "50vh",
        position: "absolute",
        right: 0,
      }}
      shadows
      camera={{ position: [0, 0, 20], fov: 50 }}
    >
      <spotLight position={[20, 20, 10]} penumbra={1} castShadow angle={0.2} />
      <mesh receiveShadow>
        <sphereGeometry args={[3]} />
        {/*{" "}
        <polyhedronGeometry
          args={[
            [
              -1, -1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1, 1, 1, -1, 1,
              1, 1, 1, -1, 1, 1,
            ],
            [
              2, 1, 0, 0, 3, 2, 0, 4, 7, 7, 3, 0, 0, 1, 5, 5, 4, 0, 1, 2, 6, 6,
              5, 1, 2, 3, 7, 7, 6, 2, 4, 5, 6, 6, 7, 4,
            ],
            6,
            2,
          ]}
        />{" "}
        */}
        <MeshTransmissionMaterial
          backside
          backsideThickness={5}
          thickness={2}
        />
      </mesh>
      <CameraRig />
      <ContactShadows
        scale={100}
        position={[0, -7.5, 0]}
        blur={1}
        far={100}
        opacity={0.85}
      />
      <Environment preset="city">
        <Lightformer
          intensity={8}
          position={[10, 5, 0]}
          scale={[10, 50, 1]}
          onUpdate={(self) => self.lookAt(0, 0, 0)}
        />
      </Environment>
    </Canvas>
  );
}

function CameraRig() {
  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [
        Math.sin(-state.pointer.x) * 5,
        state.pointer.y * 3.5,
        15 + Math.cos(state.pointer.x) * 10,
      ],
      0.2,
      delta,
    );
    state.camera.lookAt(0, 0, 0);
  });

  return null;
}
