import { AfterViewInit, Component, ElementRef, Inject, Renderer2 } from '@angular/core';
import {
  BoxGeometry,
  Color,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from 'three';

import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-three-scene',
  templateUrl: './three-scene.component.html',
  styleUrls: ['./three-scene.component.css']
})
export class ThreeSceneComponent implements AfterViewInit {

  fov = 35; // AKA Field of View
  aspect!: number;
  near = 1; // the near clipping plane
  far = 150; // the far clipping plane
  // create a Scene
  scene: Scene = new Scene();
  // geometry
  geometry = new BoxGeometry(2, 2, 2);
  // Cam
  camera!: PerspectiveCamera;
  material = new MeshBasicMaterial({color: 0x0fff0f});
  cube = new Mesh(this.geometry, this.material);
  renderer = new WebGLRenderer();

  constructor(
    private el: ElementRef,
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private document: Document) {}


    joyEvent(ev: any)
    {
      console.log(ev);
      switch (ev) {
        case 'UP':
          this.cube.rotateX(0.1);
          break;
        case 'DOWN': 
        this.cube.rotateX(-0.1);
          break;
        case 'LEFT': 
        this.cube.rotateY(0.1);
          break;
        case 'RIGHT':
          this.cube.rotateY(-0.1);
          break;
        case 'CENTER': 
        this.cube.rotateZ(0.1);
          break; 
        case 'ALERT':
           
          break;
      }   

      this.renderer.render(this.scene, this.camera);
    }

  ngAfterViewInit(): void {
    this.aspect = 1000 / 1000;
    this.camera = new PerspectiveCamera(this.fov, this.aspect, this.near, this.far);
    this.scene.background = new Color('skyblue');
    this.camera.position.set(0, 0, 10);
    // add the mesh to the scene
    this.scene.add(this.cube);
    this.renderer.setSize(1000, 1000);
    this.renderer.setPixelRatio(window.devicePixelRatio); 
    // render, or 'create a still image', of the scene
    this.renderer.render(this.scene, this.camera);
     this.renderer2.appendChild(this.el.nativeElement, this.renderer.domElement);
  }
}
