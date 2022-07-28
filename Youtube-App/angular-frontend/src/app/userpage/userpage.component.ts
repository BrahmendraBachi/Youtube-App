import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { Videos } from '../videos';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {

  constructor(private route:ActivatedRoute, private userService : UserService, private router:Router) { }
  username : string | undefined;
  search : string | undefined;
  videos : Videos[] | undefined;
  video : Videos | undefined;
  ngOnInit(): void {
    console.log("userpage");
    this.username=this.route.snapshot.params['username'];
    this.getAllVideos();
  }
  Search()
  {
    this.router.navigate(["/search",this.search],{state:{Username : this.username}});
  }
  MyChannel(username : string | undefined)
  {
    console.log("Name is:"+username)
    this.userService.checkChannelbyname(username).subscribe(data=>{
      console.log(data);
      if(data===null)
      {
        console.log("channel is null");
        this.router.navigate(["/nochannel",this.username]);
      }
      else
      {
        this.gotoMyChannel();
      }
    })
  }
  gotoMyChannel()
  {
    console.log(this.username+" userpage");
    this.router.navigate(["/channel",this.username]);
  }
  getAllVideos()
  {
    this.userService.getAllVideos().subscribe(data=>{
      this.videos = data;
    })
  }
  open(id: number | undefined)
  {
    this.gotoVideo(id);
  }
  gotoVideo(id : number | undefined)
  {
    console.log("username in open " + this.username);
    this.router.navigate(["/video",id],{state:{Username : this.username}});
  }
  userpage(username : string | undefined)
  {
    this.router.navigate(["/userpage",username]);
  }
}
