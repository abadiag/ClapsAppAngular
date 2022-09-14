import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  
  state: any;
  currentFile: any = {};

  isFirstPlaying() {
    return false;
  }
  isLastPlaying() {
    return true;
  }

  constructor() { }
  play(){}
  pause(){}
  next(){}
  previous(){}
  onSliderChangeEnd(ev: any){}

  ngOnInit(): void {
  }

}
