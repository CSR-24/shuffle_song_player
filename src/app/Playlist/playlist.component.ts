import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './playlist.template.html',
  styleUrls: ['./playlist.style.css']
})
export class Playlist {
  @Input() playList = [];

  currentSong: { title: string; path: string; index: number };

  isPlayingEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  playStatus: boolean = false;

  timer: number;

  constructor() {}

  play() {
    clearTimeout(this.timer);
    console.log('Timer set');
    this.timer = setInterval(() => {
      if (this.currentSong.index < this.playList.length) {
        const index = this.currentSong.index + 1;
        this.currentSong = this.playList[index];
        console.log('Song Changed:' + this.currentSong.title);
      }
    }, 5000);
  }

  pause() {
    clearTimeout(this.timer);
  }

  ngOnInit() {
    this.currentSong = { ...this.playList[0], index: 0 };
  }

  playPauseHandler(e: Event) {
    this.playStatus = !this.playStatus;
    this.isPlayingEvent.emit(this.playStatus);
    if (this.playStatus) {
      this.play();
    } else {
      this.pause();
    }
  }
}
