import * as THREE from "three";

const vshader = ``;

const fshader = ``;

const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const geometry = new THREE.PlaneGeometry(2, 2);

const material = new THREE.ShaderMaterial({
  vertexShader: vshader,
  fragmentShader: fshader,
});

const plane = new THREE.Mesh(geometry, material);
scene.add(plane);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
