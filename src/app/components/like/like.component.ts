import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss'],
})
export class LikeComponent implements OnInit {
  @Input() isActive: boolean = false;
  @Input() likesCount: number = 0;
  @Output() onClick = new EventEmitter();
  ngOnInit() {
    console.log('like component');
  }
  click() {
    this.onClick.emit();
  }
}
