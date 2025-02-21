import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { VideoPlayerModalComponent } from './video-player-modal/video-player-modal.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [AppComponent,VideoPlayerModalComponent],
  imports: [
    CommonModule,
    BrowserModule
  ],
  bootstrap:[AppComponent]
})
export class AppModule { }
