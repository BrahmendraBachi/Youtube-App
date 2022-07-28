import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,NgModel,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { CreateComponent } from './create/create.component';
import { LoginComponent } from './login/login.component';
import { UserpageComponent } from './userpage/userpage.component';
import { NoChannelComponent } from './no-channel/no-channel.component';
import { ChannelComponent } from './channel/channel.component';
import { UploadComponent } from './upload/upload.component';
import { LogoutComponent } from './logout/logout.component';
import { VideoComponent } from './video/video.component';
import { MyvideosComponent } from './myvideos/myvideos.component';
import { VideoHomeComponent } from './video-home/video-home.component';
import { EditVideoComponent } from './edit-video/edit-video.component';
import { SerachComponent } from './serach/serach.component';
import { SerachHomeComponent } from './serach-home/serach-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    LoginComponent,
    UserpageComponent,
    NoChannelComponent,
    ChannelComponent,
    UploadComponent,
    LogoutComponent,
    VideoComponent,
    MyvideosComponent,
    VideoHomeComponent,
    EditVideoComponent,
    SerachComponent,
    SerachHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
