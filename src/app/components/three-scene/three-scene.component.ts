import { AfterViewInit, Component, ElementRef, Inject, Renderer2, ViewChild } from '@angular/core';
import {
  AnimationMixer,
  Clock,
  Color,
  DirectionalLight,
  HemisphereLight,
  PerspectiveCamera,
  Scene,
  Vector3,
  WebGLRenderer,
} from 'three';

import {
  GLTF,
  GLTFLoader
} from 'three/examples/jsm/loaders/GLTFLoader';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

@Component({
  selector: 'app-three-scene',
  templateUrl: './three-scene.component.html',
  styleUrls: ['./three-scene.component.css']
})
export class ThreeSceneComponent implements AfterViewInit {

  @ViewChild('scenecontainer') container!: ElementRef;

  loader: GLTFLoader = new GLTFLoader();
  fov = 35; // AKA Field of View
  aspect!: number;
  near = 1; // the near clipping plane
  far = 150; // the far clipping plane
  scene!: Scene;
  // Cam
  camera!: PerspectiveCamera;
  renderer = new WebGLRenderer();
  mixers = new Array<AnimationMixer>();
  clock = new Clock();
  controls!: OrbitControls;
  hemisphere!: HemisphereLight;
  mainLight!: DirectionalLight;

  directionalLightOptions = {
    color: 0xffffff,
    intensity: 5
  };

  hemisphereOptions = {
    skyColor: 0xddeeff,
    groundColor: 0x0f0e0d,
    intensity: 5
  };

  joyEvent(ev: any) {
    console.log(ev);
    switch (ev) {
      case 'UP':
        this.camera.translateZ(-0.1);
        break;
      case 'DOWN':
        this.camera.translateZ(0.1);
        break;
      case 'LEFT':
        this.camera.translateX(-0.1);
        break;
      case 'RIGHT':
        this.camera.translateX(0.1);
        break;
      case 'CENTER':
        this.camera.translateY(0.1);
        break;
    }

    this.render;
  }

  ngAfterViewInit(): void {

    console.log("afterViewInit");
    this.initialize(this.container);
  }

  initialize = (container: ElementRef) => {
    this.container = container;
    this.scene = new Scene();
    this.scene.background = new Color('skyblue');
    this.aspect = container.nativeElement.clientWidth / container.nativeElement.clientHeight;
    this.createCamera();
    this.createControls();
    this.createLight();
    //this.createModels();
    this.addCarModel();
    this.createRenderer();
    this.start();
  }

  private createCamera = () => {
    this.camera = new PerspectiveCamera(
      this.fov,
      this.aspect,
      this.near,
      this.far
    );
    this.camera.position.set(-1.5, 1.5, 6.5);
  }
  // CONTROLS
  private createControls = () => this.controls = new OrbitControls(this.camera, this.container.nativeElement);

  // LIGHTING
  private createLight = () => {

    this.hemisphere = new HemisphereLight(
      this.hemisphereOptions.skyColor,
      this.hemisphereOptions.groundColor,
      this.hemisphereOptions.intensity
    );

    this.mainLight = new DirectionalLight(
      this.directionalLightOptions.color,
      this.directionalLightOptions.intensity
    );
    this.mainLight.position.set(10, 10, 10);

    this.scene.add(this.hemisphere, this.mainLight);
  }

  private onWindowResize = () => {
    this.camera.aspect = this.container.nativeElement.clientWidth / this.container.nativeElement.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer && this.renderer.setSize(this.container.nativeElement.clientWidth, this.container.nativeElement.clientHeight);
  }

  private createRenderer = () => {

    if (this.container != null) {
      console.log("W:" + this.container.nativeElement.clientWidth);
      console.log("H:" + this.container.nativeElement.clientHeight);
    }

    this.renderer.setSize(this.container.nativeElement.clientWidth, this.container.nativeElement.clientHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.physicallyCorrectLights = true;
    this.container.nativeElement.appendChild(this.renderer.domElement);
    window.addEventListener('resize', this.onWindowResize);
  }

  private update = () => {
    const delta = this.clock.getDelta();
    this.mixers.forEach(x => x.update(delta));
  }

  start = () => this.renderer.setAnimationLoop(() => {
    this.update();
    this.render();
  });

  stop = () => this.renderer.setAnimationLoop(null);

  private render = () => this.renderer.render(this.scene, this.camera);

  carPosition = new Vector3(0, 0, -40);
  carUrl = '../../../assets/models/glb/lotus_exige_240.glb';
  flamingoPosition = new Vector3(4, 0, -10);
  flamingoUrl = '../../../assets/models/glb/Flamingo.glb';
  parrotPosition = new Vector3(0, 0, 2.5);
  parrotUrl = '../../../assets/models/glb/Parrot.glb';
  storkPosition = new Vector3(0, -2.5, -10);
  storkUrl = '../../../assets/models/glb/Stork.glb'


  private addCarModel = () => {
    const loadModel = (gltf: GLTF, position: Vector3) => {
      const model = gltf.scene.children[0];
      model.position.copy(position);
      model.scale.set(1, 1, 1);
      this.scene.add(model);
    }

    this.loader.load(
      this.carUrl,
      gltf => loadModel(gltf, this.carPosition),
      () => { },
      err => console.log(err)
    );
  }

  private createModels = () => {
    const loadModel = (gltf: GLTF, position: Vector3) => {
      const model = gltf.scene.children[0];
      model.position.copy(position);
      model.scale.set(0.09, 0.09, 0.09);
      const animation = gltf.animations[0];
      const mixer = new AnimationMixer(model);
      this.mixers.push(mixer);
      const action = mixer.clipAction(animation);
      action.play();
      this.scene.add(model);
    }

    this.loader.load(
      this.parrotUrl,
      gltf => loadModel(gltf, this.parrotPosition),
      () => { },
      err => console.log(err)
    );

    this.loader.load(
      this.flamingoUrl,
      gltf => loadModel(gltf, this.flamingoPosition),
      () => { },
      err => console.log(err)
    );

    this.loader.load(
      this.storkUrl,
      gltf => loadModel(gltf, this.storkPosition),
      () => { },
      err => console.log(err)
    );
  }
}
