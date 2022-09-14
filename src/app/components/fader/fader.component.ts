import { CdkDrag, CdkDragMove } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fader',
  templateUrl: './fader.component.html',
  styleUrls: ['./fader.component.css']
})
export class FaderComponent implements OnInit {

  public Value: number = 0;

  fadderDrag(ev: CdkDragMove<any>){    
    this.Value = ev.pointerPosition.y + ev.distance.y;
    console.log("dragging " + this.Value);
  }
  constructor() { } 
  ngOnInit(): void {
  }

}
