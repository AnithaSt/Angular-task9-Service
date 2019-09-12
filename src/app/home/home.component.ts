import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service'
import { del } from 'selenium-webdriver/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
bindData:any;
  constructor(public service:ServiceService) { }

  ngOnInit() {
    setInterval(()=>{
      this.service.getdata().subscribe(res=>{
      this.bindData = res;
      console.log(res)
    })
    },500)
    
  }
  del(value){
    this.service.delete(value).subscribe(res=>{
      console.log(res)
    })
  }
  
}
