import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SecurityContext } from '@angular/core';

@Component({
  selector: 'app-cardview',
  templateUrl: './cardview.component.html',
  styleUrls: ['./cardview.component.css'],
})
export class CardviewComponent {
 
  id!: number;
  title: string = "Title";
  content: string =  "";

  colsMax: number = 1;
  rowsMax: number = 1;
  cols: number = 1;
  rows: number = 1;

  type!: CardType;

  constructor()
  { 
  }  
}

export enum CardType {
  text, 
  graph, 
  time
}
