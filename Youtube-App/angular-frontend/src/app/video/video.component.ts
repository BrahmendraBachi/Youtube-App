import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { Videos } from '../videos';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  id : number | undefined;
  video : Videos = new Videos()
  url : string | undefined;
  search : string | undefined;
  username : string | undefined;
  remainingVideos : Videos[] | undefined;
  dum = 1;
  constructor(private route : ActivatedRoute, private userService : UserService, private sanitizer: DomSanitizer, private router : Router) { 
    this.username = router.getCurrentNavigation()?.extras?.state?.['Username'] || undefined;
  }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    console.log(this.username + " userpage ");
    this.getVideoById();
    this.getAllRemainngVideos(this.id);
    console.log(this.username);
  }
  getVideoById()
  {
    this.userService.getVideoById(this.id).subscribe(data=>{
      this.video = data;
      this.url = this.video?.videoUrl;
    })
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
    this.router.navigate(["/search",this.search]);
  }
  MyChannel(username : string | undefined)
  {
    this.router.navigate(["/channel",username]);
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
  userpage(username : string | undefined)
  {
    this.router.navigate(["/userpage",username]);
  }
}
