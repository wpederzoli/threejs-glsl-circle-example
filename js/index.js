import * as THREE from "three";

const vshader = `
  varying vec3 v_position;

  void main() {
    v_position = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(v_position, 1.0);
  }
`;

const fshader = `
  varying vec3 v_position;

  void main() {
    float circle = 1.0 - step(0.5, length(v_position.xy));
    gl_FragColor = vec4(0.0, 0.0, 1.0, 1.0) * circle;
  }

`;

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

camera.position.z = 1;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
