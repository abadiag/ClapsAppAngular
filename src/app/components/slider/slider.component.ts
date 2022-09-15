import { CdkDragMove } from '@angular/cdk/drag-drop';
import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit, AfterViewInit {

  @Output() faderValueChanged: EventEmitter<any> = new EventEmitter();

  private contentHeight: number = 0;
  private currentYPosition: number = -10;
  private maxYPosition: number = 100;
  private minYPosition: number = 0;
  private stepY: number = 0;

  public Value: number = 1;

  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {
    this.contentHeight = this.el.nativeElement.offsetHeight;
    console.log(this.contentHeight);
    this.stepY = this.maxYPosition / this.contentHeight;
  }

  fadderDrag(ev: CdkDragMove<any>) {
    if(this.Value >= this.minYPosition && this.Value <= this.maxYPosition)
    {
    this.Value = this.Value + ev.delta.y * this.stepY;
    this.Value = this.Value > this.maxYPosition? this.maxYPosition: this.Value;
    this.Value = this.Value < this.minYPosition? this.minYPosition: this.Value;
    
    console.log(this.Value);
    this.faderValueChanged.emit(this.Value);
  }

  }

  ngOnInit(): void {
  }

}
