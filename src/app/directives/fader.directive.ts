// import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostListener, Output, Input, EventEmitter, Inject, OnInit } from '@angular/core';

@Directive({
  selector: '[faderHead]'
})
export class FaderDirective implements OnInit {

  @Output() value = new EventEmitter();
  @Input('starting') startingAngle!: number;
  private element!: HTMLElement;
  xPosition: number = -10;
  masXPosition: number = 60;
  minXPosition: number = -300;

  constructor(private el: ElementRef
    // , @Inject(DOCUMENT) private document: any
    ) { }
  
  @HostListener('mousewheel', ['$event']) onMouse(e: any) {
    e.preventDefault();
    this.moveFromMWheel(e.deltaY);
  }

  ngOnInit(): void {
    this.element = this.el.nativeElement as HTMLElement;
    this.initDrag();
  }

  moveFromMWheel(dx: number) {

    if (this.xPosition > this.minXPosition - dx / 10 && this.xPosition < this.masXPosition - dx / 10) {
      this.xPosition += dx / 10;
      
    }
    
    this.element.style.transform =
          "translate3d(" + 0 + "px, " +  this.xPosition + "px, 0)";

    console.log(this.xPosition)
  }



initDrag(){}

}
