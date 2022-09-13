import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { CardProviderService } from 'src/app/services/card-provider.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent {

  title: string = "DashBoard";
  data: string[] = [];



  removeCard(id: number) {
    console.log("remove card with id " + id);
    let removedCard = this.cardProvider.getCardById(id)?.title;
    this.cardProvider.removeCard(id);
    if (removedCard) {
      this.data.push(removedCard);
    }
  }

  expandCard(id: number) {
    console.log("expand card with id " + id);
  }

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        // not fits on current
        this.cardProvider.cardsCollection.forEach(c => c.cols = 1);
      } else {
        // fits on current screen
        this.cardProvider.cardsCollection.forEach(c => c.cols = c.colsMax);
      }
      return this.cardProvider.cardsCollection;
    })
  );

  constructor(private breakpointObserver: BreakpointObserver, private cardProvider: CardProviderService) { }
}
