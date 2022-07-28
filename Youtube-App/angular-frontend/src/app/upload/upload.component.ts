import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateChannel } from '../create-channel';
import { UserService } from '../user.service';
import { Videos } from '../videos';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  search : string | undefined;
  username : string | undefined;
  video : Videos = new Videos();
  channel : CreateChannel = new CreateChannel();
  constructor(private route : ActivatedRoute, private userService : UserService, private router:Router) { }

  ngOnInit(): void {
    this.username=this.route.snapshot.params['username'];
    console.log("Upload Works");
  }
  onSubmit()
  {
    this.userService.checkChannelbyname(this.username).subscribe(data=>{
      this.channel = data;
      this.video.logo = this.channel.logo;
      this.video.likes = 0;
      this.video.channelTitle = this.channel.channelName;
      this.gotoAddVideo();
    })
  }
  gotoAddVideo()
  {
    this.userService.UploadVideo(this.video).subscribe(data=>{
      console.log(data);
      this.gotoChannelPage(this.username);
    })
  }
  gotoChannelPage(username : string | undefined)
  {
    this.router.navigate(["/channel",this.username]);
  }
  Search()
  {

  }
}
