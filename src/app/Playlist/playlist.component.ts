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
      let index = this.currentSong.index + 1;
      if (index < this.playList.length) {
        this.currentSong = { ...this.playList[index], index: index };
        console.log('Song Changed:' + this.currentSong.title);
      } else {
        this.currentSong = { ...this.playList[0], index: 0 };
      }
    }, 5000);
  }

  pause() {
    clearTimeout(this.timer);
    // console.log('Timer cleared ' + this.timer);
  }

  ngOnInit() {
    this.currentSong = { ...this.playList[0], index: 0 };
  }

  playPauseHandler(e: Event) {
    this.playStatus = !this.playStatus;
    if (this.playStatus) {
      this.play();
    } else {
      this.pause();
    }
  }
}
