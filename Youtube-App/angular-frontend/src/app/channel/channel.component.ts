import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateChannel } from '../create-channel';
import { UserService } from '../user.service';
import { Videos } from '../videos';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css']
})
export class ChannelComponent implements OnInit {
  username : string | undefined;
  channel : CreateChannel = new CreateChannel();
  videos : Videos[] | undefined;
  search : string | undefined;
  msg : string | undefined;
  constructor(private route : ActivatedRoute, private userService : UserService, private router:Router) {
    this.msg = router.getCurrentNavigation()?.extras?.state?.['Msg'] || undefined;
  }
  ngOnInit(): void {
    this.username=this.route.snapshot.params['username'];
    console.log(this.username + " is my username");
    console.log("Channel");
    this.getChannel();
  }
  getChannel()
  {
    this.userService.checkChannelbyname(this.username).subscribe(data=>{
      console.log(data+"data");
      this.channel = data;
      console.log(this.channel.logo);
      this.MyVideos();
    })
  }
  Upload()
  {
    this.router.navigate(["/upload",this.username]);
  }
  MyVideos()
  {
    this.userService.getMyVideos(this.channel.channelName).subscribe(data=>{
      this.videos = data;
    })
  }
  Search()
  {
    this.router.navigate(["/search",this.search],{state:{Username : this.username}});
  }
  MyChannel(name : string | undefined)
  {
    this.router.navigate(["/channel/",this.username]);
  }
  open(id : number | undefined)
  {
    this.router.navigate(["/myvideos", id],{state:{Username:this.username}});
  }
  Edit(id : number | undefined)
  {
    console.log("edit "+this.username);
    this.router.navigate(["/edit-video",id],{state:{Username:this.username}});
  }
  userpage(username : string | undefined)
  {
    console.log(username);
    this.router.navigate(["/userpage",username]);
  }
}
