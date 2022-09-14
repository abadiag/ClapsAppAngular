import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ClapsApp';
}

export enum CHART_TYPES
{
  Lines,
  Pie,
  Bar,
  Time
}
