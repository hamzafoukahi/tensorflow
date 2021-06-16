import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Shared2Service {
  message:string;
  constructor() { }

  setMessage(data){
    this.message= data
  }

  getMessage(){
    return this.message
  }
}
