import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UserService } from '../user.service';
import { Videos } from '../videos';

@Component({
  selector: 'app-myvideos',
  templateUrl: './myvideos.component.html',
  styleUrls: ['./myvideos.component.css']
})
export class MyvideosComponent implements OnInit {
  myremainingVideos : Videos[] | undefined;
  search : string | undefined;
  username : string | undefined;
  id : number | undefined;
  public video : Videos = new Videos();
  url : string | undefined;
  constructor(private userService : UserService, private router : Router, private route : ActivatedRoute, private sanitizer: DomSanitizer) { 
    this.username = router.getCurrentNavigation()?.extras?.state?.['Username'] || undefined;
  }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.getVideoById();
    console.log("username"+this.username);
  }
  getVideoById()
  {
    this.userService.getVideoById(this.id).subscribe(data=>{
      console.log(data);
      this.video = data;
      console.log(this.video.channelTitle+" getVico");
      this.url = this.video.videoUrl;
      this.getMyRemainingVideos(this.video);
    })
  }
  getMyRemainingVideos(video : Videos)
  {
    console.log(this.video.channelTitle + " myvideis");
    this.userService.getMyRemainingVideos(this.id, this.video).subscribe(data=>{
      console.log(data);
      this.myremainingVideos = data; 
    })
  }
  like()
  {
    this.userService.updateVideoLikes(this.video, this.id).subscribe(data=>{
      console.log(data);
    })
  }
  MyChannel(username : string | undefined)
  {
    console.log(username+" Username");
    this.router.navigate(["/channel", username])
  }
  Search()
  {
    this.router.navigate(["/search",this.search],{state:{Username : this.username}});
  }
  getSanitizedURL(url : string | undefined) 
  {
    if(url!=null)
    {
      return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
    else{
      return null;
    }
  }
  open(id : number | undefined)
  {
    this.id = id;
    this.getVideoById();
    this.getMyRemainingVideos(this.video)
  }
  userpage(username : string | undefined)
  {
    this.router.navigate(["/userpage",username]);
  }
}
