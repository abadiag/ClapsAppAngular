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

  isMouseDown: boolean = false;
  isMouseHover: boolean = false;
  
  mouseDownPosition!: number;
  mouseOffset: number = 0;

  constructor(private el: ElementRef
    // , @Inject(DOCUMENT) private document: any
    ) { }
  
  @HostListener('mousewheel', ['$event']) onMouse(e: any) {
    e.preventDefault();
    this.moveFaderHead(e.deltaY);
  }

  @HostListener('mouseleave', ['$event']) 
  onMouseLeave(e: MouseEvent) {
    this.isMouseHover =  false; 
     this.isMouseDown =  false; 
     this.mouseDownPosition = e.clientX;
  }

  @HostListener("mouseover", ['$event']) onMouseHover(e: MouseEvent)
  {
    e.preventDefault();
    this.isMouseHover =  true;    
  };
  @HostListener("mousedown", ['$event']) onMouseDown(e: MouseEvent)
  {
    e.preventDefault();
    this.mouseOffset = 0;
    this.mouseDownPosition = e.clientX;
    this.isMouseDown =  true; 
    console.log("mouse down");   
  };

   @HostListener("mouseup", ['$event']) onMouseUp(e: MouseEvent)
  {
    e.preventDefault();
    this.mouseOffset = 0;
    this.isMouseDown =  false;
    this.mouseDownPosition = e.clientX;
     console.log("mouse up");  
  }; 
  @HostListener("mousemove", ['$event']) onMouseMove(e: MouseEvent)
  {
    e.preventDefault();
    if(this.isMouseDown && this.isMouseHover)
    {
      this.mouseOffset = e.clientX - this.mouseDownPosition ;
      this.moveFaderHead(this.mouseOffset);
      console.log(this.mouseOffset);
    } 
  };
 
  ngOnInit(): void {
    this.element = this.el.nativeElement as HTMLElement;
    }

  moveFaderHead(dx: number) {

    if (this.xPosition > this.minXPosition - dx && this.xPosition < this.masXPosition - dx) {
      this.xPosition += dx;      
      this.element.style.transform =
            "translate3d(" + 0 + "px, " +  this.xPosition + "px, 0)"; 
    }
  }
}
