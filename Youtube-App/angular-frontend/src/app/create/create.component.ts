import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateChannel } from '../create-channel';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  name : string | undefined;
  channel : CreateChannel = new CreateChannel();
  constructor(private route:ActivatedRoute, private userService : UserService, private router:Router) { }

  ngOnInit(): void {
    this.name=this.route.snapshot.params['name'];
    console.log(this.name);
    this.channel.username = this.name;
  }
  onSubmit()
  {
    this.userService.createChannel(this.channel).subscribe(data=>{
      console.log(data);
      this.gotoUserPage();
    })
  }
  gotoUserPage()
  {
    this.router.navigate(["/channel",this.name]);
  }
}
