import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  playList = [
    {
      title: 'title_1',
      path: '',
      isPlaying: false
    },
    {
      title: 'title_2',
      path: '',
      isPlaying: false
    },
    {
      title: 'title_3',
      path: '',
      isPlaying: false
    },
    {
      title: 'title_4',
      path: '',
      isPlaying: false
    }
  ];
}
