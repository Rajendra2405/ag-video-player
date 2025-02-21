import { Component, OnInit, OnDestroy } from '@angular/core';
import videojs from 'video.js';

@Component({
  selector: 'app-video-player-modal',
  templateUrl: './video-player-modal.component.html',
  styleUrls: ['./video-player-modal.component.css'],
})
export class VideoPlayerModalComponent implements OnInit, OnDestroy {
  isOpen: boolean = false;
  videoUrl: string = '';
  mimeType: string = '';
  private player: any;

  constructor() {}

  ngOnInit() {}

  openModal(videoUrl: string, mimeType: string) {
    this.videoUrl = videoUrl;
    this.mimeType = mimeType;
    this.isOpen = true;

    // Initialize the video player after the modal is opened
    setTimeout(() => {
      this.player = videojs('videoPlayer', {
        controls: true,
        autoplay: true,
        preload: 'auto',
      });
    }, 0);
  }

  closeModal() {
    this.isOpen = false;
    if (this.player) {
      this.player.dispose(); // Clean up the video player
    }
  }

  ngOnDestroy() {
    if (this.player) {
      this.player.dispose(); // Clean up the video player when the component is destroyed
    }
  }
}
