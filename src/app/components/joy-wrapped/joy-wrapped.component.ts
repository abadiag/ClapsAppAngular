import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { JoystickManagerOptions, JoystickOutputData } from 'nipplejs';
import { JoyComponent, JoystickEvent } from '../joy/joy.component';

@Component({
  selector: 'app-joy-wrapped',
  templateUrl: './joy-wrapped.component.html',
  styleUrls: ['./joy-wrapped.component.css']
})
export class JoyWrappedComponent implements OnInit {

  title = 'joystick';
  @ViewChild('staticJoystic')
  staticJoystick!: JoyComponent;
  @ViewChild('dynamicJoystick')
  dynamicJoystick!: JoyComponent;
  @ViewChild('semiJoystick')
  semiJoystick!: JoyComponent;

  @Output() move: EventEmitter<JoystickOutputData> = new EventEmitter();

  staticOptions: JoystickManagerOptions = {
    mode: 'static',
    position: { left: '50%', top: '50%' },
    color: 'blue',
  };

  dynamicOptions: JoystickManagerOptions = {
    mode: 'dynamic',
    color: 'red',
    multitouch: true
  };

  semiOptions: JoystickManagerOptions = {
    mode: 'semi',
    catchDistance: 50,
    color: 'purple'
  };

  staticOutputData!: JoystickOutputData;
  semiOutputData!: JoystickOutputData;
  dynamicOutputData!: JoystickOutputData;

  directionStatic!: string;
  interactingStatic!: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  onStartStatic(event: JoystickEvent) {
    this.interactingStatic = true;
  }

  onEndStatic(event: JoystickEvent) {
    this.interactingStatic = false;
  }

  onMoveStatic(event: JoystickEvent) {
    this.staticOutputData = event.data;
  }

  onPlainUpStatic(event: JoystickEvent) {
    this.directionStatic = 'UP';
  }

  onPlainDownStatic(event: JoystickEvent) {
    this.directionStatic = 'DOWN';
  }

  onPlainLeftStatic(event: JoystickEvent) {
    this.directionStatic = 'LEFT';
  }

  onPlainRightStatic(event: JoystickEvent) {
    this.directionStatic = 'RIGHT';
  }

  onMoveSemi(event: JoystickEvent) {
    this.semiOutputData = event.data;
  }

  onMoveDynamic(event: JoystickEvent) {

    this.dynamicOutputData = event.data;
    this.move.emit(this.dynamicOutputData);
  }

}
