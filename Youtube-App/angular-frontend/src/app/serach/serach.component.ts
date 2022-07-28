import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { Videos } from '../videos';

@Component({
  selector: 'app-serach',
  templateUrl: './serach.component.html',
  styleUrls: ['./serach.component.css']
})
export class SerachComponent implements OnInit {
  searchVidoes : Videos[] | undefined;
  search : string | undefined;
  username : string | undefined
  constructor(private route : ActivatedRoute, private userService : UserService, private router : Router) {
    this.username = router.getCurrentNavigation()?.extras?.state?.['Username'] || undefined;
  }

  ngOnInit(): void {
    this.search=this.route.snapshot.params['search'];
    console.log(this.username+" Username");
    this.getVideosBySearch();
  }
  getVideosBySearch()
  {
    this.userService.getVideosBySearch(this.search).subscribe(data=>{
      this.searchVidoes = data;
      console.log(data);
    })
  }
  Search()
  {
    this.getVideosBySearch();
  }
  MyChannel(username : string | undefined)
  {
    this.router.navigate(["/channel",this.username]);
  }
  open(id: number | undefined)
  {
    this.router.navigate(["/video",id]);
  }
  userpage(username : string | undefined)
  {
    this.router.navigate(["/userpage",username]);
  }
}
