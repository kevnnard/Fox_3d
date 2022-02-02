import React from "react";

//animate
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import * as dat from "dat.gui";

// textureLoader

const textureLoader = new THREE.TextureLoader();

/**
 * GUI Controls
 */

const gui = new dat.GUI();
// const settings = {
//   speed: 0.7,
//   density: 0.6,
//   strength: 0.2,
//   frequency: 0.6,
//   amplitude: 8.5,
//   intensity: 5.0,
// }
// const folder1 = gui.addFolder('Noise')
// const folder2 = gui.addFolder('Rotation')
// const folder3 = gui.addFolder('Color')
// folder1.add(settings, 'speed', 0.1, 1, 0.01)
// folder1.add(settings, 'density', 0, 10, 0.01)
// folder1.add(settings, 'strength', 0, 2, 0.01)
// folder2.add(settings, 'frequency', 0, 10, 0.1)
// folder2.add(settings, 'amplitude', 0, 10, 0.1)
// folder3.add(settings, 'intensity', 0, 10, 0.1)

// Canvas
const canvas = document.querySelector("canvas.webglllll");

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color("rgba(0,0,0,1)");

// Objects
const loader2 = new GLTFLoader();
loader2.load("/mesh/man.glb", function (gltf) {
  const geometry = gltf.scene.children[0].geometry;
  geometry.computeVertexNormals(false);

  let mesh = new THREE.Mesh(geometry, buildTwistMaterial(100));
  mesh.position.x = 0;
  mesh.position.y = -1.4;
  //mesh.position.z = -1;
  mesh.rotation.x = 1.57;
  mesh.rotation.z = 0.4;
  mesh.scale.x = 0.14;
  mesh.scale.y = 0.14;
  mesh.scale.z = 0.14;

  scene.add(mesh);
});
/**
 * MATERIAL
 */

function buildTwistMaterial(amount) {
  const material = new THREE.MeshNormalMaterial();
  material.onBeforeCompile = function (shader) {
    shader.uniforms.time = { value: 0 };

    shader.vertexShader = "uniform float time;\n" + shader.vertexShader;
    shader.vertexShader = shader.vertexShader.replace(
      "#include <begin_vertex>",
      [
        `float theta = sin( time + position.y ) / ${amount.toFixed(1)};`,
        "float c = cos( theta );",
        "float s = sin( theta );",
        "mat3 m = mat3( c, 0, s, 0, 1, 0, -s, 0, c );",
        "vec3 transformed = vec3( position ) * m;",
        "vNormal = vNormal * m;",
      ].join("\n")
    );

    material.userData.shader = shader;
  };

  // Make sure WebGLRenderer doesnt reuse a single program

  material.customProgramCacheKey = function () {
    return amount;
  };

  return material;
}

// Lights

const pointLight = new THREE.PointLight(0xffffff, 0.1);
pointLight.position.x = 2;
pointLight.position.y = 3;
pointLight.position.z = 4;
//scene.add(pointLight);

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 10;
scene.add(camera);

// gui.add(camera.position, "x").min(-5).max(5);
// gui.add(camera.position, "y").min(-5).max(5);
// gui.add(camera.position, "z").min(-5).max(5);

// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.autoRotate = true;
controls.enableZoom = false;
controls.enablePan = false;
controls.dampingFactor = 0.25;
controls.maxDistance = 3;
controls.minDistance = 1;
controls.touches = {
  ONE: THREE.TOUCH.ROTATE,
  TWO: THREE.TOUCH.DOLLY_PAN,
};
/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Mouse

/**
 * Animate
 */

const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update Orbital Controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
function Model2() {
  return <></>;
}

export default Model2;
