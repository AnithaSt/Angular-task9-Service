 import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service'

@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.css']
})
export class AddDetailsComponent implements OnInit {

  constructor(public data:ServiceService) { }
  

  ngOnInit() {
   
  }
  
sendData(value){
  this.data.senddata(value).subscribe(res=>{
    console.log(res)
    alert("Add Successfully");
    location.reload();
  })
  
}

}
