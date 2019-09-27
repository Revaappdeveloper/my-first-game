import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { StartPageComponent } from './components/start-page/start-page.component';
import { GamePageComponent } from './components/game-page/game-page.component';
import { ImageComponentComponent } from './components/image-component/image-component.component';
import { InventoryPanelComponent } from './components/inventory-panel/inventory-panel.component';
import { GameOverComponent } from './components/game-over/game-over.component';
import { TimerComponent } from './components/timer/timer.component';


const routes: Routes = [
  { path: '', redirectTo: 'start', pathMatch: 'full' },
  { path: 'start', component: StartPageComponent },
  { path: 'gamepage', component: GamePageComponent },
  { path: 'imagepage', component: ImageComponentComponent },
  { path: 'gameover', component: GameOverComponent },
  { path: '**', redirectTo: 'start' }


];


@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    GamePageComponent,
    ImageComponentComponent,
    InventoryPanelComponent,
    GameOverComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
