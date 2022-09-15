import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts';

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
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { ChartViewComponent } from './components/chart-view/chart-view.component';
import { PlayerComponent } from './components/player/player.component';
import {MatSliderModule} from '@angular/material/slider';
import { SoundServiceService } from './services/sound-service.service';
import { SliderComponent } from './components/slider/slider.component';
import { CamComponent } from './components/cam/cam.component';
import { ThreeSceneComponent } from './components/three-scene/three-scene.component';
import { JoystickComponent } from './components/joystick/joystick.component';
import { OverlayModule } from "@angular/cdk/overlay";

@NgModule({
  declarations: [
    AppComponent,
    FaderComponent,
    FaderDirective,
    DashComponent,
    CardviewComponent,
    ChartViewComponent,
    PlayerComponent,
    SliderComponent,
    CamComponent,
    ThreeSceneComponent,
    JoystickComponent
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
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    DragDropModule,
    ChartsModule,
    MatSliderModule,
    OverlayModule
  ],
  providers: [CardProviderService, SoundServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
