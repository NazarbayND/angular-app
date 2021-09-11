import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.scss'],
})
export class ZippyComponent implements OnInit {
  zippy = {
    title: 'zippy title',
    content: 'zippy body',
  };
  isActive = false;
  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.isActive = !this.isActive;
  }
}
