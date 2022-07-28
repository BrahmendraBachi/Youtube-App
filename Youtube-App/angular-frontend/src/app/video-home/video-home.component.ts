import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { Videos } from '../videos';

@Component({
  selector: 'app-video-home',
  templateUrl: './video-home.component.html',
  styleUrls: ['./video-home.component.css']
})
export class VideoHomeComponent implements OnInit {
  id : number | undefined;
  video : Videos = new Videos();
  url : string | undefined;
  search : string | undefined;
  remainingVideos : Videos[] | undefined;
  constructor(private route : ActivatedRoute, private userService : UserService, private sanitizer: DomSanitizer, private router : Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    console.log(this.id);
    this.getVideoById();
    this.getAllRemainngVideos(this.id);
  }
  getVideoById()
  {
    this.userService.getVideoById(this.id).subscribe(data=>{
      console.log(data);
      this.video = data;
      this.url = this.video.videoUrl;
    })
    console.log(this.video);
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
  like()
  {
    this.video.likes+=1;
    this.userService.updateVideoLikes(this.video, this.id).subscribe(data=>{
      console.log(data);
      this.video = data;
    })
  }
  Search()
  {
    this.router.navigate(["/search-home",this.search]);
  }
  getAllRemainngVideos(id : number | undefined)
  {
    this.userService.getRemainingVideos(id).subscribe(data=>{
      console.log(data);
      this.remainingVideos=data;
    })
  }
  open(id : number | undefined)
  {
    this.id = id;
    this.getVideoById();
    this.getAllRemainngVideos(this.id);
  }
}
