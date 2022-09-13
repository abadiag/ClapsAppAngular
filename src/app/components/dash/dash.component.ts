import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent {


  private card1: any = { id: 0, title: 'Card 1', cols: 1, rows: 1, colsMax: 1, some: "hola com estem", content: "<div><app-fader></app-fader></div>" };
  private card2: any = { id: 1, title: 'Card 2', cols: 2, rows: 1, colsMax: 2, some: "hola com estem", content: "<div><app-fader></app-fader></div>" };
  private card3: any = { id: 2, title: 'Card 3', cols: 2, rows: 1, colsMax: 2, some: "hola com estem", content: "<div><app-fader></app-fader></div>" };
  private card4: any = { id: 3, title: 'Card 4', cols: 1, rows: 1, colsMax: 1, some: "hola com estem", content: "<div><app-fader></app-fader></div>" };

  private cardsCollection: Array<any> = [this.card1, this.card2, this.card3, this.card4];

  addCard() {
    this.cardsCollection.push({id: this.cardsCollection.length + 1 ,title: 'Card 5', cols: 2, rows: 1, colsMax: 1, some: "new card", content: "<div><app-fader></app-fader></div>" });
  }

  removeCard(id: number) {

  }

  updateCard(id: number, value: any) {

  }

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        // not fits on current
        this.cardsCollection.forEach(c => c.cols = 1);
        this.addCard();

      } else {
        // fits on current screen
        this.cardsCollection.forEach(c => c.cols = c.colsMax);
      }
      return this.cardsCollection;
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) { }
}
