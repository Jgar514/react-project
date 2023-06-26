import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import { useHelper, SpotLight } from "@react-three/drei";
import * as THREE from "three";

function Lights() {
	const light = useRef();
	useHelper(light, THREE.SpotLightHelper, "yellow");
	return <spotLight ref={light} intensity={0.2} position={[12, 12, 5.4]} shadow-mapSize-width={1024} shadow-mapSize-height={1024} castShadow={true} shadow-bias={-0.001} target-position={[3, 4.7, 2.5]} />;
}

const Room = () => {
	const room = useGLTF("./models/june20.glb");
	// useHelper(spotLight, SpotLightHelper, "teal");
	return (
		<mesh receiveShadow>
			<hemisphereLight intensity={0.5} groundColor="black" />
			<directionalLight intensity={1.5} target-position={[3, 4.7, 2.5]} castShadow position={[12, 6, 5.4]} color="white" />
			{/* <directionalLight castShadow /> */}
			{/* <pointLight intensity={3} /> */}
			{/* <SpotLight
				distance={5}
				angle={0.15}
				attenuation={5}
				anglePower={5} // Diffuse-cone anglePower (default: 5)
			/> */}
			<Lights />

			<primitive object={room.scene} scale={0.7} position={[0, -0, 4]} receiveShadow />
		</mesh>
	);
};

const MyLife = () => {
	return (
		<div className="relative h-[50%] md:h-screen">
			<Canvas frameLoop="demand" shadows camera={{ position: [0, 24, 28], fov: 40 }} gL={{ preserveDrawingBuffer: true }}>
				<Suspense fallback={<CanvasLoader />}>
					<OrbitControls enableZoom={false} enableDamping={true} />
					<gridHelper args={[20, 20, 0xff0000, "#686C45"]} />
					{/* <gridHelper size={[80]} /> */}
					<axesHelper args={[25]} />

					<Room />
				</Suspense>
				<Preload all />
			</Canvas>
		</div>
	);
};

export default MyLife;
