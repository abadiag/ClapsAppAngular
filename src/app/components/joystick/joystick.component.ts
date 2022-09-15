import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-joystick',
  templateUrl: './joystick.component.html',
  styleUrls: ['./joystick.component.css']
})
export class JoystickComponent implements OnInit {

  constructor() { }

  @Output() joyPressed: EventEmitter<any> = new EventEmitter();

  alert(ev: string) { 
    this.joyPressed.emit(ev);
    // switch (ev) {
    //   case 'UP':
    //     this.joyPressed.emit(ev);
    //     break;
    //   case 'DOWN': 
    //   this.joyPressed.emit(ev);
    //     break;
    //   case 'LEFT': 
    //   this.joyPressed.emit(ev);
    //     break;
    //   case 'RIGHT':
    //      this.joyPressed.emit(ev);
    //     break;
    //   case 'CENTER': 
    //   this.joyPressed.emit(ev);
    //     break; 
    //   case 'ALERT':
        
    //     break;
    // }
  }

  ngOnInit(): void {
  }

}
