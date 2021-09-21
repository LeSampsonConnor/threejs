import './style.css';
import * as THREE from 'three';

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

/**
 * Objects
 */

const group = new THREE.Group();

const cube1 = new THREE.Mesh(
	new THREE.BoxGeometry(1, 1, 1),
	new THREE.MeshBasicMaterial({ color: 'orange' })
);
cube1.position.x = -2;

const cube2 = new THREE.Mesh(
	new THREE.BoxGeometry(1, 1, 1),
	new THREE.MeshBasicMaterial({ color: 'red' })
);

const cube3 = new THREE.Mesh(
	new THREE.BoxGeometry(1, 1, 1),
	new THREE.MeshBasicMaterial({ color: 'blue' })
);

cube3.position.x = 2;

group.add(cube1, cube2, cube3);
group.position.y = 3;
group.scale.y = 2;
group.rotation.y = -2;
scene.add(group);

// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
// const mesh = new THREE.Mesh(geometry, material);

// // Position, Scale, Rotate
// mesh.position.set(0.7, -0.6, -1);
// mesh.scale.set(2, 0.5, 0.5);

// mesh.rotation.reorder('YXZ');
// mesh.rotation.x = Math.PI * 0.25;
// mesh.rotation.y = Math.PI * 0.25;
// mesh.rotation.z = Math.PI * 0.25;

// scene.add(mesh);

// Axes helper

const axes = new THREE.AxesHelper();
scene.add(axes);

/**
 * Sizes
 */
const sizes = {
	width: 800,
	height: 600,
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 6;
camera.position.x = 1;
camera.position.y = 1;

scene.add(camera);

//camera.lookAt(mesh.position);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
	canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
