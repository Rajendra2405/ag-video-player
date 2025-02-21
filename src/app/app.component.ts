import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VideoPlayerModalComponent } from './video-player-modal/video-player-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild(VideoPlayerModalComponent) modal!: VideoPlayerModalComponent;

  fillerAssetHlsUrl: string =
    'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8';
  fillerAssetDashUrl: string =
    'https://dash.akamaized.net/envivio/EnvivioDash3/manifest.mpd';
  isFillerToggled: boolean = true;

  constructor() {}
  ngAfterViewInit() {
    // Ensures modal is initialized before use
    if (!this.modal) {
      console.error('Modal component not found!');
    }
  }
  public openVideoPlayer(type: string) {
    const videoUrl = type === 'hls' ? this.fillerAssetHlsUrl : this.fillerAssetDashUrl;
    const mimeType = type === 'hls' ? 'application/x-mpegURL' : 'application/dash+xml';

    if (this.modal) {
      this.modal.openModal(videoUrl, mimeType);
    } else {
      console.error('Modal component is not initialized.');
    }
  }
}
