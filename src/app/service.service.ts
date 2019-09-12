import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import{map} from 'rxjs/operators';
  @Injectable({
  providedIn: 'root'
})
export class ServiceService {
  mydata:any;
  constructor(public http:Http) { }
  senddata(value){ 
    return this.http.post('https://5cc5a315f24a0f0014cd1e10.mockapi.io/api/v1/servicecall',value)
    .pipe(map(data=>this.mydata=data.json()))
  }
  getdata(){ 
    return this.http.get('https://5cc5a315f24a0f0014cd1e10.mockapi.io/api/v1/servicecall')
    .pipe(map(data=>this.mydata=data.json()))
  }
  delete(value){ 
    return this.http.delete('https://5cc5a315f24a0f0014cd1e10.mockapi.io/api/v1/servicecall/'+value)
    .pipe(map(data=>this.mydata=data.json()))
  }
}
