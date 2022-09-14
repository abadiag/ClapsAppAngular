import { CdkDrag, CdkDragMove } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fader',
  templateUrl: './fader.component.html',
  styleUrls: ['./fader.component.css']
})
export class FaderComponent implements OnInit {

  @Output() faderValueChanged: EventEmitter<any> = new EventEmitter();

  private xPosition: number = -10;
  private maxXPosition: number = 60;
  private minXPosition: number = -300;

  public Value: number = 0;

  fadderDrag(ev: CdkDragMove<any>){
    this.Value = ev.pointerPosition.y + ev.distance.y;
    this.faderValueChanged.emit(this.Value);
  }
  constructor() { } 
  ngOnInit(): void {
  }

}
