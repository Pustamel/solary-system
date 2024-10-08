import * as THREE from "three";

const ratioByEarth = {
  sun: 694439000,
  mercury: 2439000,
  venus: 6051000,
  earth: 6371000,
  mars: 3389000,
  jupiter: 69911000,
  saturn: 58232000,
  uranus: 25362000,
  neptune: 24622000,
};

const scale = 1 / 1000000;

export function Sun() {
  const radius = scale * ratioByEarth.sun;
  const geometry = new THREE.SphereGeometry(radius, 64, 64);
  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load("./images/sun.jpg");
  const material = new THREE.MeshBasicMaterial({ map: texture });
  const mesh = new THREE.Mesh(geometry, material);
  return { mesh, radius };
}

export function Mercury() {
  const radius = scale * ratioByEarth.mercury;
  const geometry = new THREE.SphereGeometry(radius, 64, 64);
  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load("./images/mercury.jpeg");
  const material = new THREE.MeshBasicMaterial({ map: texture });
  const mesh = new THREE.Mesh(geometry, material);
  return { mesh, radius };
}

export function Venus() {
  const radius = scale * ratioByEarth.venus;
  const geometry = new THREE.SphereGeometry(radius, 64, 64);
  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load("./images/venus.jpeg");
  const material = new THREE.MeshBasicMaterial({ map: texture });
  const mesh = new THREE.Mesh(geometry, material);
  return { mesh, radius };
}

export function Earth() {
  const radius = scale * ratioByEarth.earth;
  const geometry = new THREE.SphereGeometry(radius, 64, 64);
  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load("./images/earth.jpg");
  const material = new THREE.MeshBasicMaterial({ map: texture });
  const mesh = new THREE.Mesh(geometry, material);
  return { mesh, radius };
}

export function Mars() {
  const radius = scale * ratioByEarth.mars;
  const geometry = new THREE.SphereGeometry(radius, 64, 64);
  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load("./images/mars.jpeg");
  const material = new THREE.MeshBasicMaterial({ map: texture });
  const mesh = new THREE.Mesh(geometry, material);
  return { mesh, radius };
}

export function Jupiter() {
  const radius = scale * ratioByEarth.jupiter;
  const geometry = new THREE.SphereGeometry(radius, 64, 64);
  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load("./images/jupiter.jpeg");
  const material = new THREE.MeshBasicMaterial({ map: texture });
  const mesh = new THREE.Mesh(geometry, material);
  return { mesh, radius };
}

export function Saturn() {
  const radius = scale * ratioByEarth.saturn;
  const geometry = new THREE.SphereGeometry(radius, 64, 64);
  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load("./images/saturn.jpeg");
  const material = new THREE.MeshBasicMaterial({ map: texture });
  const mesh = new THREE.Mesh(geometry, material);
  return { mesh, radius };
}

export function Uranus() {
  const radius = scale * ratioByEarth.uranus;
  const geometry = new THREE.SphereGeometry(radius, 64, 64);
  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load("./images/uranus.jpg");
  const material = new THREE.MeshBasicMaterial({ map: texture });
  const mesh = new THREE.Mesh(geometry, material);
  return { mesh, radius };
}

export function Neptune() {
  const radius = scale * ratioByEarth.neptune;
  const geometry = new THREE.SphereGeometry(radius, 64, 64);
  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load("./images/neptune.jpg");
  const material = new THREE.MeshBasicMaterial({ map: texture });
  const mesh = new THREE.Mesh(geometry, material);
  return { mesh, radius };
}
