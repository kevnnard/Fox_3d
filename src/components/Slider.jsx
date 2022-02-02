import React from 'react'

//animate
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
//import * as dat from 'dat.gui'
import gsap from 'gsap'


const Slider = () => {

    // textureLoader

const textureLoader = new THREE.TextureLoader()


// Debug
//const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()
const fondo = new THREE.TextureLoader();
 fondo.load('/img/fondo.jpg', function(texture){
     scene.background = texture;
 })
const geometry = new THREE.PlaneBufferGeometry(1.3, 1.3)

// Objects
const loader2 = new GLTFLoader()
loader2.load('/mesh/man.glb', function (gltf) {
  const geometry = gltf.scene.children[0].geometry
  geometry.computeVertexNormals(false)

  let mesh = new THREE.Mesh(geometry, buildTwistMaterial(100))
  mesh.position.x = -2
  mesh.position.y = -1.4
  mesh.position.z = -1
  mesh.rotation.x = 1.57
  mesh.rotation.z = -.7
  mesh.scale.x = .14
  mesh.scale.y = .14
  mesh.scale.z = .14

  scene.add(mesh)
})

const loader3 = new GLTFLoader()
loader3.load('/mesh/man.glb', function (gltf) {
  const geometry = gltf.scene.children[0].geometry
  geometry.computeVertexNormals(false)

  let mesh = new THREE.Mesh(geometry, buildTwistMaterial(100))
  mesh.position.x = -2
  mesh.position.y = -15
  mesh.position.z = -1
  mesh.rotation.x = 1.57
  mesh.rotation.z = -.7
  mesh.scale.x = .14
  mesh.scale.y = .14
  mesh.scale.z = .14

  scene.add(mesh)
})

const loader4 = new GLTFLoader()
loader4.load('/mesh/man.glb', function (gltf) {
  const geometry = gltf.scene.children[0].geometry
  geometry.computeVertexNormals(false)

  let mesh = new THREE.Mesh(geometry, buildTwistMaterial(100))
  mesh.position.x = -2
  mesh.position.y = -25
  mesh.position.z = -1
  mesh.rotation.x = 1.57
  mesh.rotation.z = -.7
  mesh.scale.x = .14
  mesh.scale.y = .14
  mesh.scale.z = .14

  scene.add(mesh)
})
/**
 * MATERIAL
 */

function buildTwistMaterial(amount) {
  const material = new THREE.MeshNormalMaterial()
  material.onBeforeCompile = function (shader) {
    shader.uniforms.time = { value: 0 }

    shader.vertexShader = 'uniform float time;\n' + shader.vertexShader
    shader.vertexShader = shader.vertexShader.replace(
      '#include <begin_vertex>',
      [
        `float theta = sin( time + position.y ) / ${amount.toFixed(1)};`,
        'float c = cos( theta );',
        'float s = sin( theta );',
        'mat3 m = mat3( c, 0, s, 0, 1, 0, -s, 0, c );',
        'vec3 transformed = vec3( position ) * m;',
        'vNormal = vNormal * m;',
      ].join('\n')
    )

    material.userData.shader = shader
  }

  // Make sure WebGLRenderer doesnt reuse a single program

  material.customProgramCacheKey = function () {
    return amount
  }

  return material
}
for (let i = 0; i < 8; i++){
    const material = new THREE.MeshBasicMaterial({
        map: textureLoader.load(`/img/${i}.jpg`)
    })
    const img = new THREE.Mesh(geometry, material)
    img.position.set(Math.random(), i*2.1 )

    scene.add(img)
}

let objs = []

scene.traverse((Object) => {
    if(Object.isMesh)
    objs.push(Object)
})

// Lights

const pointLight = new THREE.PointLight(0xffffff, 0.1)
pointLight.position.x = 2
pointLight.position.y = 3
pointLight.position.z = 4
scene.add(pointLight)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = 0
camera.position.z = 2
scene.add(camera)

//gui.add(camera.position, 'y').min(-5).max(10)

// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true


// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true
// controls.autoRotate = false
// controls.enableZoom = true
// controls.enablePan = false
// controls.dampingFactor = 0.05
// controls.maxDistance = 1000
// controls.minDistance = 0
// controls.touches = {
//   ONE: THREE.TOUCH.ROTATE,
//   TWO: THREE.TOUCH.DOLLY_PAN,
// }
/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// Mouse

window.addEventListener("wheel", onMouseWheel)

let y = 0
let position = 0

function onMouseWheel(event) {
    y = event.deltaY * 0.0009
}

const mouse = new THREE.Vector2()

window.addEventListener('mousemove', (event) => {
    mouse.x = event.clientX / sizes.width * 2 - 1
    mouse.y = - (event.clientY / sizes.width) * 2 + 1


})

/**
 * Animate
 */

const raycaster = new THREE.Raycaster()

const clock = new THREE.Clock()

const tick = () =>
{

    const elapsedTime = clock.getElapsedTime()

    position += y
    y *= .5

    //Ray 

    raycaster.setFromCamera(mouse, camera)
    const intersects = raycaster.intersectObjects(objs)

    for ( const intersect of intersects){
         gsap.to(intersect.object.scale, {x: 1.5, y: 1.5})
         gsap.to(intersect.object.rotation, {y: -.5})
    }

    for ( const object of objs) {
        if (!intersects.find(intersect => intersect.object === object)) {
             gsap.to(object.scale, {x: 1, y: 1})
             gsap.to(object.rotation, {y: .5})
        }
    }
    camera.position.y = position

    // Update Orbital Controls
    // controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

    tick()
    return (
    <>
    </>
    )
}

export default Slider
