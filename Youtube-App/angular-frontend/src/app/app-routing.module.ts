import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChannelComponent } from './channel/channel.component';
import { CreateComponent } from './create/create.component';
import { EditVideoComponent } from './edit-video/edit-video.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MyvideosComponent } from './myvideos/myvideos.component';
import { NoChannelComponent } from './no-channel/no-channel.component';
import { SerachHomeComponent } from './serach-home/serach-home.component';
import { SerachComponent } from './serach/serach.component';
import { UploadComponent } from './upload/upload.component';
import { UserpageComponent } from './userpage/userpage.component';
import { VideoHomeComponent } from './video-home/video-home.component';
import { VideoComponent } from './video/video.component';

const routes: Routes = [
  {path : "", component: HomeComponent},
  {path : "create/:name" , component : CreateComponent},
  {path : "Login" , component : LoginComponent},
  {path : "userpage/:username" , component : UserpageComponent},
  {path : "nochannel/:name" , component : NoChannelComponent},
  {path : "channel/:username" , component : ChannelComponent},
  {path : "upload/:username" , component : UploadComponent},
  {path : "Logout" , component : LogoutComponent},
  {path : "video/:id" , component : VideoComponent},
  {path : "video-home/:id" , component : VideoHomeComponent},
  {path : "myvideos/:id", component : MyvideosComponent},
  {path : "edit-video/:id" , component : EditVideoComponent},
  {path : "search/:search", component : SerachComponent},
  {path : "search-home/:search", component : SerachHomeComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
