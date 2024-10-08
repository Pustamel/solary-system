import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import {
  Earth,
  Jupiter,
  Mars,
  Mercury,
  Neptune,
  Saturn,
  Sun,
  Uranus,
  Venus,
} from "./planets";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75, // FOV - поле зрения. Протяженность сцены в градусах.
  window.innerWidth / window.innerHeight, // соотношение сторон
  0.1, // near
  100e6 // far
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

const container = document.getElementById("container");
container.appendChild(renderer.domElement);

const sun = Sun();
sun.mesh.position.set(0, 0, 0);

const light = new THREE.PointLight(0xffffff, 1, 100); // Цвет, интенсивность, расстояние
light.position.set(0, 800, 0); // Позиция источника света
scene.add(light);
sun.mesh.add(light); // Присоединяем источник света к сфере

scene.add(sun.mesh);

const mercury = Mercury();
mercury.mesh.position.set(800, 0, 0);
scene.add(mercury.mesh);

const venus = Venus();
venus.mesh.position.set(1080, 0, 0);
scene.add(venus.mesh);

const earth = Earth();
earth.mesh.position.set(1500, 0, 0);
scene.add(earth.mesh);

const mars = Mars();
mars.mesh.position.set(2280, 0, 0);
scene.add(mars.mesh);

const jupiter = Jupiter();
jupiter.mesh.position.set(7780, 0, 0);
scene.add(jupiter.mesh);

const saturn = Saturn();
saturn.mesh.position.set(14290, 0, 0);
scene.add(saturn.mesh);

const uranus = Uranus();
uranus.mesh.position.set(28750, 0, 0);
scene.add(uranus.mesh);

const neptune = Neptune();
neptune.mesh.position.set(44970, 0, 0);
scene.add(neptune.mesh);

camera.position.set(0, 300, 3000);
camera.lookAt(0, 0, 0);

const controls = new OrbitControls(camera, renderer.domElement);
controls.autoRotate = false;
controls.enablePan = false; // панорама
controls.enableDamping = true; // сглаживание

const axesHelper = new THREE.AxesHelper(28750);
// scene.add(axesHelper);

function animate() {
  requestAnimationFrame(animate);
  controls.update();

  const pivot = new THREE.Vector3(0, 0, 0); // Точка вращения

  const offsetMercury = new THREE.Vector3().copy(mercury.mesh.position).sub(pivot);// Позиция объекта относительно точки вращения
  offsetMercury.applyAxisAngle(new THREE.Vector3(0, 1, 0), 0.003);// Поворот вокруг точки вращения
  mercury.mesh.position.copy(pivot).add(offsetMercury); //обновить position объекта

  const offsetVenus = new THREE.Vector3().copy(venus.mesh.position).sub(pivot);// Позиция объекта относительно точки вращения
  offsetVenus.applyAxisAngle(new THREE.Vector3(0, 1, 0), 0.002);// Поворот вокруг точки вращения
  venus.mesh.position.copy(pivot).add(offsetVenus); //обновить position объекта

  const offsetEarth = new THREE.Vector3().copy(earth.mesh.position).sub(pivot);// Позиция объекта относительно точки вращения
  offsetEarth.applyAxisAngle(new THREE.Vector3(0, 1, 0), 0.001);// Поворот вокруг точки вращения
  earth.mesh.position.copy(pivot).add(offsetEarth); //обновить position объекта

  const offsetMars = new THREE.Vector3().copy(mars.mesh.position).sub(pivot);// Позиция объекта относительно точки вращения
  offsetMars.applyAxisAngle(new THREE.Vector3(0, 1, 0), 0.0007);// Поворот вокруг точки вращения
  mars.mesh.position.copy(pivot).add(offsetMars); //обновить position объекта

  const offsetJupiter = new THREE.Vector3().copy(jupiter.mesh.position).sub(pivot);// Позиция объекта относительно точки вращения
  offsetJupiter.applyAxisAngle(new THREE.Vector3(0, 1, 0), 0.0003);// Поворот вокруг точки вращения
  jupiter.mesh.position.copy(pivot).add(offsetJupiter); //обновить position объекта

  const offsetSaturn = new THREE.Vector3().copy(saturn.mesh.position).sub(pivot);// Позиция объекта относительно точки вращения
  offsetSaturn.applyAxisAngle(new THREE.Vector3(0, 1, 0), 0.0002);// Поворот вокруг точки вращения
  saturn.mesh.position.copy(pivot).add(offsetSaturn); //обновить position объекта

  const offsetUranus = new THREE.Vector3().copy(uranus.mesh.position).sub(pivot);// Позиция объекта относительно точки вращения
  offsetUranus.applyAxisAngle(new THREE.Vector3(0, 1, 0), 0.0001);// Поворот вокруг точки вращения
  uranus.mesh.position.copy(pivot).add(offsetUranus); //обновить position объекта

  const offsetNeptune = new THREE.Vector3().copy(neptune.mesh.position).sub(pivot);// Позиция объекта относительно точки вращения
  offsetNeptune.applyAxisAngle(new THREE.Vector3(0, 1, 0), 0.0001);// Поворот вокруг точки вращения
  neptune.mesh.position.copy(pivot).add(offsetNeptune); //обновить position объекта

  renderer.render(scene, camera);
}
animate();
