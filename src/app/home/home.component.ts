import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { Router,ActivatedRoute , Params } from '@angular/router';
import { filter, map, withLatestFrom } from 'rxjs/operators';
import { HandGesture } from '../hand-gesture.service';
import {Shared1Service} from '../shared/shared1.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements AfterViewInit {
  @ViewChild('video') video: ElementRef<HTMLVideoElement>;
  @ViewChild('canvas') canvas: ElementRef<HTMLCanvasElement>;
  @ViewChild('home') homeLink: ElementRef<HTMLAnchorElement>;
  @ViewChild('down') aboutLink: ElementRef<HTMLAnchorElement>;
  variable:string = '';
  message:string='';


  opened$ = this._recognizer.swipe$.pipe(
    filter((value) => value === 'left' || value === 'right'),
    map((value) => value === 'right')
  );

  // selection$ = this._recognizer.gesture$.pipe(
  //   filter((value) => value === 'stop' || value === 'two' || value === 'three' ),
  //   map((value) => (value === 'two' ? 'home' : 'about'))
  // );
  //-------
  selection$ = this._recognizer.gesture$.pipe(
    filter((value) => value === 'one' || value === 'two' || value === 'three' || value === 'four' || value === 'stop' ),
    map((value) => {
		if(value === 'one'){
			return 'stop1';
		} if(value === 'two') {
			return 'stop2';
		}
    if(value === 'three'){
      return 'stop3';
    }   
    // if(value === 'four'){
    //   return 'four';
    // }   
    // if(value === 'stop'){
    //   return 'stop';
    // }    
		           }
		)
		);

  //--------

  constructor(private shared:Shared1Service ,private _recognizer: HandGesture, private _router: Router , private activatedRoute: ActivatedRoute) {
    this._recognizer.gesture$
      .pipe(
        filter((value) => value === 'ok'),
        withLatestFrom(this.selection$)
      )
      .subscribe(([_, page]) => 
      { 
        this._router.navigate(['/test2/'+ page])}
      );

    this.activatedRoute.params.subscribe(( params: Params ) => {
      this.variable = params.page
      console.log('okokok' + params.page)
      this.message = params.page;
    });
  }
  

  get stream(): MediaStream {
    return this._recognizer.stream;
  }

  ngAfterViewInit(): void {
    this.shared.setMessage(this.message)
    if (this.canvas && this.video )this._recognizer.initialize(
      this.canvas.nativeElement,
      this.video.nativeElement
    );
  }
}
