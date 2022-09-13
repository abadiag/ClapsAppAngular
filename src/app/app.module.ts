import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FaderComponent } from './components/fader/fader.component';
import { FaderDirective } from './directives/fader.directive';
import { DashComponent } from './components/dash/dash.component'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { CardviewComponent } from './components/cardview/cardview.component';
import { CardProviderService } from './services/card-provider.service';

@NgModule({
  declarations: [
    AppComponent,
    FaderComponent,
    FaderDirective,
    DashComponent,
    CardviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    BrowserAnimationsModule
  ],
  providers: [CardProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
