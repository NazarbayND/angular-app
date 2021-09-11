import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/common/data.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss'],
})
export class FollowersComponent implements OnInit, OnDestroy {
  followers: any[] = [];
  isLoading: boolean = false;
  subscriptions: Subscription[] = [];
  constructor(private service: DataService) {}

  ngOnInit(): void {
    this.getFollowers();
  }
  getFollowers(): void {
    this.isLoading = true;
    const followersSub = this.service.getFollowers().subscribe((response) => {
      this.isLoading = false;
      this.followers = response;
    });
    this.subscriptions.push(followersSub);
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
