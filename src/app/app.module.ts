import { DataService } from 'src/app/services/common/data.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LikeComponent } from './components/like/like.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ZippyComponent } from './components/zippy/zippy.component';
import { PasswordChangeComponent } from './components/password-change/password-change.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FollowersComponent } from './components/followers/followers.component';

@NgModule({
  declarations: [
    AppComponent,
    LikeComponent,
    ZippyComponent,
    PasswordChangeComponent,
    FollowersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
