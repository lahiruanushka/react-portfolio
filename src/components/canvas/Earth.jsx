import { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  useEffect(() => {
    // Cleanup function to dispose of the model when component unmounts
    return () => {
      if (earth) {
        earth.scenes?.forEach((scene) =>
          scene.traverse((object) => {
            if (object.geometry) {
              object.geometry.dispose();
            }
            if (object.material) {
              if (object.material.length) {
                object.material.forEach((material) => material.dispose());
              } else {
                object.material.dispose();
              }
            }
          })
        );
      }
    };
  }, [earth]);

  // Add error boundary for model loading
  if (!earth || !earth.scene) {
    console.error("Failed to load Earth model");
    return null;
  }

  return (
    <mesh>
      <primitive
        object={earth.scene}
        scale={2.5}
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{
        preserveDrawingBuffer: true,
        antialias: true,
        alpha: true,
      }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* Add ambient and directional light for better visibility */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />

        <OrbitControls
          autoRotate
          autoRotateSpeed={0.5}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

// Preload the model
useGLTF.preload("./planet/scene.gltf");

export default EarthCanvas;
