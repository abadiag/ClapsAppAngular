import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoundServiceService {

  player = new Audio();

  load(src: string) {
    this.player.src = src;
    this.player.load();
  }

  play() {
    this.player.play();
  }

  pause() {
    this.player.pause();
  }

  constructor() { }


}
