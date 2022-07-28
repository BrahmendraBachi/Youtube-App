import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Videos } from '../videos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  search : string | undefined;
  constructor(private userService : UserService, private router :  Router) { }
  videos : Videos[] | undefined;
  remainingVideos : Videos[] | undefined;
  ngOnInit(): void {
    this.getAllVideos();
  }
  Search()
  {
    console.log(this.search);
    this.router.navigate(["/search-home",this.search]);
  }
  getAllVideos()
  {
    this.userService.getAllVideos().subscribe(data=>{
      this.videos = data;
      console.log(data);
    })
  }
  open(id : number | undefined)
  {
    console.log(id + "this is my id");
    this.getVideo(id);
    this.getAllRemainngVideos(id);
  }
  getVideo(id : number | undefined)
  {
    this.router.navigate(["/video-home",id]);
  }
  getAllRemainngVideos(id : number | undefined)
  {
    this.userService.getRemainingVideos(id).subscribe(data=>{
      console.log(data);
      this.remainingVideos=data;
    })
  }
}
