import {  OnInit } from '@angular/core';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { Router,ActivatedRoute , Params } from '@angular/router';
import { filter, map, withLatestFrom } from 'rxjs/operators';
import { HandGesture } from '../hand-gesture.service';
import {Shared1Service} from '../shared/shared1.service'
import {Shared2Service} from '../shared/shared2.service'

@Component({
  selector: 'app-stop',
  templateUrl: './stop.component.html',
  styleUrls: ['./stop.component.css']
})
export class StopComponent implements OnInit {
  variable3:string = '';
  message:string ='';
  variable2:string='';
  constructor(private shared:Shared1Service,private shared2:Shared2Service , private _router: Router , private activatedRoute: ActivatedRoute) { 

    this.activatedRoute.params.subscribe(( params: Params ) => {
      this.variable3 = params.page
      console.log('_________ ' + params.page + ' -------- ')
    });

  }

  ngOnInit(): void {

    this.message = this.shared.getMessage()
    this.variable2 = this.shared2.getMessage()
  }

}
