import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { Videos } from '../videos';

@Component({
  selector: 'app-edit-video',
  templateUrl: './edit-video.component.html',
  styleUrls: ['./edit-video.component.css']
})
export class EditVideoComponent implements OnInit {
  constructor(private route : ActivatedRoute, private userService : UserService, private router : Router) {
    this.username = router.getCurrentNavigation()?.extras?.state?.['Username'] || undefined;
   }
  video : Videos = new Videos();
  id : number | undefined;
  username : string | undefined;
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.getVideoById();
  }
  getVideoById()
  {
    this.userService.getVideoById(this.id).subscribe(data=>{
      this.video = data;
    })
  }
  onSubmit()
  {
    this.userService.updateVideo(this.video, this.id).subscribe(data=>{
      console.log(data);
      console.log(this.username+ " Bachi");
      this.router.navigate(["/channel", this.username],{state:{Msg:"Video Edited Successfully"}});
    })
  }

}
