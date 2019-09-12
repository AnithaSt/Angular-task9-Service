import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  id:any;
  bindData:any;
  display:any={
    myname:'',
    email:'',
    registerno:'',
    age:'',
    aadhaarno:''
  }

  constructor(private route:ActivatedRoute,public service:ServiceService) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    console.log(this.id);
    this.service.getdata().subscribe(res=>{
      this.bindData=res;
      for(let i=0;i<this.bindData.length;i++){
        if(this.id==this.bindData[i].id){
          this.display.myname = this.bindData[i].myname;
          this.display.email = this.bindData[i].email;
          this.display.registerno = this.bindData[i].registerno;
          this.display.age = this.bindData[i].age;
          this.display.aadhaarno = this.bindData[i].aadhaarno;
          console.log(this.bindData[i])
          console.log(this.display)
          
        }
      }
    })
  }

}
