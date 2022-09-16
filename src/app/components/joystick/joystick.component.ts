import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-joystick',
  templateUrl: './joystick.component.html',
  styleUrls: ['./joystick.component.css']
})
export class JoystickComponent implements OnInit {

  constructor() { }

  @Output() joyPressed: EventEmitter<any> = new EventEmitter();

  private up_pressed = false;
  private down_pressed = false;
  private right_pressed = false;
  private left_presed = false;
  private center_pressed = false;


  alert(ev: string, pressed: boolean) {
    switch (ev) {
      case 'UP':
        this.up_pressed = pressed;
        break;
      case 'DOWN':
        this.down_pressed = pressed;
        break;
      case 'LEFT':
        this.left_presed = pressed;
        break;
      case 'RIGHT':
        this.right_pressed = pressed;
        break;
      case 'CENTER':
        this.center_pressed = pressed;
        break;
    }
  }

  updateJoy() {

      if (this.up_pressed) {
        this.joyPressed.emit("UP");
      }
       if (this.down_pressed) {
        this.joyPressed.emit("DOWN");
      } 
       if (this.left_presed) {
        this.joyPressed.emit("LEFT");
      } 
      if (this.right_pressed) {
        this.joyPressed.emit("RIGHT");
      } 
      if (this.center_pressed) {
        this.joyPressed.emit("CENTER");
      }
    
  }

  ngOnInit(): void {
    setInterval(() => {
      this.updateJoy();
    }, 100);
  }

}
