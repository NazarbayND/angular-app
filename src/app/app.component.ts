import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-app';
  tweet = {
    body: 'first tweet ...',
    isActive: false,
    likesCount: 0,
  };
  clickHandler() {
    this.tweet.isActive = true;
    this.tweet.likesCount++;
  }
}
