//Import Three.js Library
import * as THREE from 'three';

//Create a scene
const scene = new THREE.Scene();

//Initialize Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//Create cube geometry and material
const createCube = (position, color) => {
	const geometry = new THREE.BoxGeometry();
	const material = new THREE.MeshBasicMaterial({color});
	const cube = new THREE.Mesh(geometry, material);
	cube.position.set(...position);
	scene.add(cube);
	return cube;
};

//Create cubes
const cube1 = createCube([-2, 0, 0], 0xff0000);
const cube2 = createCube([0, 0, 0], 0x00ff00);
const cube3 = createCube([2, 0, 0], 0x0000ff);

//Change background color
// scene.background = new THREE.Color(0xababab);

//Change background image
const loader = new THREE.TextureLoader();
scene.background = loader.load('./img/Donald_Trump_official_portrait.jpg');

//Create a locate camera
var canvasWidth = 1280, canvasHeight = 720;
var fieldOfViewY = 60, aspectRatio = canvasWidth / canvasHeight, near=0.1, far= 100.0;
var camera = new THREE.PerspectiveCamera( fieldOfViewY, aspectRatio, near, far );
camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );

	cube1.rotation.x += 0.05;
	cube1.rotation.y += 0.05;

	cube2.rotation.x -= 0.05;
	cube2.rotation.y -= 0.05;

	cube3.rotation.x -= 0.05;
	cube3.rotation.y += 0.05;

	renderer.render( scene, camera );
}

animate();