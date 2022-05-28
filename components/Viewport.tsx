import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls, useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { Vector3 } from "three";

const deg2rad = (degrees) => degrees * (Math.PI / 180);

export default function Viewport(props) {
	return (
		<div className={`viewport w-full h-screen`}>
			<Canvas frameloop="demand" color="000" dpr={[1, 2]} gl={{ antialias: true }}>
				<PerspectiveCamera makeDefault position={[-20, 10 + props.scroll * 0.01, 50]} />
				<ambientLight />
				<pointLight position={[-10, 10, 10]} />
				<Model />
			</Canvas>
		</div>
	);
}

function LoadLightsAndCameras() {
	
}

function Model() {
	const group = useRef();
	const { nodes, materials } = useGLTF("/models/IsometricBase.gltf");

	const settings = {
		scaleMultiplier: 2,
	};

	return (
		<group ref={group} dispose={null}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.WallLeft.geometry}
				material={nodes.WallLeft.material}
				position={[0, 3 * settings.scaleMultiplier, -2.9 * settings.scaleMultiplier]}
				scale={[
					3 * settings.scaleMultiplier,
					3 * settings.scaleMultiplier,
					0.1 * settings.scaleMultiplier,
				]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Floor.geometry}
				material={nodes.Floor.material}
				scale={[
					3 * settings.scaleMultiplier,
					0.01 * settings.scaleMultiplier,
					3 * settings.scaleMultiplier,
				]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.WallRight.geometry}
				material={nodes.WallRight.material}
				position={[2.9 * settings.scaleMultiplier, 3 * settings.scaleMultiplier, 0]}
				rotation={[0, -Math.PI / 2, 0]}
				scale={[
					3 * settings.scaleMultiplier,
					3 * settings.scaleMultiplier,
					0.1 * settings.scaleMultiplier,
				]}
			/>
		</group>
	);
}

useGLTF.preload("/models/IsometricBase.gltf");
