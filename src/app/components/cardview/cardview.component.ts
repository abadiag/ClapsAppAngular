import { Component, OnInit } from '@angular/core';
import { MatCardContent, MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-cardview',
  templateUrl: './cardview.component.html',
  styleUrls: ['./cardview.component.css']
})
export class CardviewComponent implements MatCardModule, OnInit {

  id!: number;
  title: string = "Title";
  content: string = "content";

  colsMax: number = 1;
  rowsMax: number = 1;
  cols: number = 1;
  rows: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  
}
