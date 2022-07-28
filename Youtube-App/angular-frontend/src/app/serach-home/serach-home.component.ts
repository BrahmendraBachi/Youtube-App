import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { Videos } from '../videos';

@Component({
  selector: 'app-serach-home',
  templateUrl: './serach-home.component.html',
  styleUrls: ['./serach-home.component.css']
})
export class SerachHomeComponent implements OnInit {
  searchVideos : Videos[] | undefined;
  search : string | undefined;
  constructor(private route : ActivatedRoute, private userService : UserService, private router :Router) { }

  ngOnInit(): void {
    this.search=this.route.snapshot.params['search'];
    console.log(this.search);
    this.getVideos();
  }
  open(id: number | undefined)
  {
    this.router.navigate(["/video-home",id]);
  }
  Search()
  {
    this.getVideos();
  }
  getVideos()
  {
    this.userService.getVideosBySearch(this.search).subscribe(data=>{
      this.searchVideos = data;
    })
  }
}
