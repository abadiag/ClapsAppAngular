import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FaderComponent } from './components/fader/fader.component';
import { FaderDirective } from './directives/fader.directive';

@NgModule({
  declarations: [
    AppComponent,
    FaderComponent,
    FaderDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
