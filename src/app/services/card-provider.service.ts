import { Injectable, OnInit } from '@angular/core';
import { CardType, CardviewComponent } from '../components/cardview/cardview.component';

@Injectable({
  providedIn: 'root'
})
export class CardProviderService implements OnInit {

  private card1: CardviewComponent = {
    id: 0, title: 'Card 0', cols: 1, rows: 1, colsMax: 1, rowsMax: 1, content: "<p>hello</p>", type: CardType.graph
  };
  private card2: CardviewComponent = {
    id: 1, title: 'Card 1', cols: 2, rows: 1, colsMax: 2, rowsMax: 1, content: '<mat-spinner></mat-spinner>', type: CardType.text
  };

  private card3: CardviewComponent = {
    id: 2, title: 'Card 2', cols: 2, rows: 1, colsMax: 2, rowsMax: 1, content: "Some Text", type: CardType.text
  };
  private card4: CardviewComponent = {
    id: 3, title: 'Card 3', cols: 1, rows: 1, colsMax: 1, rowsMax: 1, content: "Some Text", type: CardType.text
  };

  cardsCollection: Array<CardviewComponent> = [];

  constructor() {
    this.addCard(this.card1);
    this.addCard(this.card2);
    this.addCard(this.card3);
    this.addCard(this.card4);
  }

  ngOnInit(): void {
  }

  addCard(cardView: CardviewComponent) {
    cardView.id = this.cardsCollection.length + 1;
    this.cardsCollection.push(cardView);
  }

  removeCard(id: number) {
    let card = this.cardsCollection.find(c => c.id == id);
    if (card) {
      this.cardsCollection.splice(this.cardsCollection.indexOf(card), 1);
    }
  }

  updateCard(id: number, cardView: CardviewComponent) {
    let card = this.cardsCollection.find(c => c.id == id);
    if (card) {
      card = cardView;
    }
  }

  getCardById(id: number) {
    return this.cardsCollection.find(c => c.id == id);
  }
}
