import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Spinning = () => {
	const spinning = useGLTF("./models/june21.glb");

	return <primitive object={spinning.scene} scale={0.8} position-y={-3} rotation-y={0} />;
};

const SpinningCanvas = () => {
	return (
		<Canvas
			shadows
			frameLoop="demand"
			gL={{ preserveDrawingBuffer: true }}
			camera={{
				fov: 25,
				near: 0.1,
				far: 200,
				position: [-14, 20, 16],
			}}
		>
			<Suspense fallback={<CanvasLoader />}>
				<ambientLight />
				{/* <OrbitControls autoRotate enableZoom={false} /> */}
				<OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />

				<Spinning />
			</Suspense>
		</Canvas>
	);
};

export default SpinningCanvas;
