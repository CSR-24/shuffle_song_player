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
      path:
        'https://images.unsplash.com/reserve/9Fx2auQ4yoHM8OpWA8qw__MG_5265.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
      isPlaying: false
    },
    {
      title: 'title_2',
      path:
        'https://images.unsplash.com/photo-1629428469363-1281a9271f20?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      isPlaying: false
    },
    {
      title: 'title_3',
      path:
        'https://images.unsplash.com/photo-1629222664728-88ec7438126d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
      isPlaying: false
    },
    {
      title: 'title_4',
      path:
        'https://images.unsplash.com/photo-1628717851530-c22930b40e63?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
      isPlaying: false
    }
  ];
}
