import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-no-channel',
  templateUrl: './no-channel.component.html',
  styleUrls: ['./no-channel.component.css']
})
export class NoChannelComponent implements OnInit {
  name : string | undefined;
  search : string | undefined;
  constructor(private route : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.name=this.route.snapshot.params['name'];
  }
  Create()
  {
    console.log("Create is triggered");
    console.log(this.name);
    this.router.navigate(["/create", this.name]);
  }
  userpage(username : string | undefined)
  {
    this.router.navigate(["/userpage",this.name]);
  }
  Search()
  {
    this.router.navigate(["/search",this.search],{state:{Username : this.name}});
  }
  MyChannel(name : string | undefined)
  {
    this.router.navigate(["/channel", name]);
  }
}
