import {
  Center,
  OrbitControls,
  Loader,
  useGLTF,
  Plane,
  Box,
} from '@react-three/drei';
import { Suspense, useRef } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import styles from './Scene.module.scss';

extend({ Canvas });
const Model = () => {
  // const modelURL =
  // 'https://github.com/thomasmatlock/react-next-three-fiber-template/raw/main/public/portal.glb';
  // const modelURL =
  // 'https://github.com/thomasmatlock/react-next-three-fiber-template/raw/main/public/video.glb';
  // 'https://github.com/thomasmatlock/react-next-three-fiber-template/blob/main/public/video.glb';
  //
  // const modelURL = 'https://modelviewer.dev/shared-assets/models/Astronaut.glb';
  const modelURL =
    // 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Sponza/glTF/Sponza.gltf';
    'https://raw.githubusercontent.com/thomasmatlock/react-next-three-fiber-template/main/public/video.gltf';
  // 'https://raw.githubusercontent.com/thomasmatlock/react-next-three-fiber-template/main/public/street sign.gltf';
  // 'https://raw.githubusercontent.com/thomasmatlock/react-next-three-fiber-template/main/public/nzxt tower.gltf';
  // 'https://raw.githubusercontent.com/thomasmatlock/react-next-three-fiber-template/main/public/warp scene.gltf';
  // const { scene } = useGLTF(modelURL);
  // const modelURL = `/Users/nikkirincon/Documents/GitHub/warp-app/assets/video.glb`;
  const { scene } = useGLTF(modelURL);
  console.log(scene);
  // traverse the children
  scene.traverse((child) => {
    // console.log(child);
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  return <primitive object={scene} />;
};

export default function Scene(props: any) {
  // window.electron.ipcRenderer.on('global', (arg) => {
  //   console.log(arg);

  // });
  // const { threeScene } = props;
  function EveryFrame() {
    useFrame((state) => {
      //  handleResize();
      // console.log(state.camera.zoom);
      // rotate camera around the origin
      console.log(state.camera.position.x);

      state.camera.position.x = Math.sin(state.clock.getElapsedTime()) * 1;
      // state.camera.position.y = Math.cos(state.clock.getElapsedTime()) * 2;
    });
    return null;
  }
  return (
    <Canvas
      // flat
      // colorManagement
      // shadowMap
      shadows
      dpr={[1, 2]}
      gl={{
        powerPreference: 'high-performance',
        antialias: true,
        // logarithmicDepthBuffer: true,
      }}
      orthographic
      camera={{
        position: [-3, 1, 5],
        // fov: 90,
        // zoom: 8, // video nav icon
        zoom: 60, // video
        // zoom: 250,
        near: 0.1,
        far: 1000,
      }}
    >
      <OrbitControls
        makeDefault
        enableDamping
        dampingFactor={0.1}
        // autoRotate
        // autoRotateSpeed={-5}
        enablePan={false}
        enableZoom={false}
        enableRotate={false}
        target={[0, 1, 0]}
      />
      {/* <ambientLight intensity={0.1} />
      <directionalLight
        intensity={1}
        castShadow
        shadow-mapSize-height={512}
        shadow-mapSize-width={512}
        position={[0, 10, 10]}
      /> */}
      <ambientLight intensity={1} />
      {/* <directionalLight position={[-10, -10, -5]} intensity={1} /> */}
      {/* <directionalLight
        castShadow
        intensity={1}
        position={[50, 50, 25]}
        shadow-mapSize={[256, 256]}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      /> */}

      <fog attach="fog" args={['white', 0, 40]} />

      <Model />
      <EveryFrame />
    </Canvas>
  );
}