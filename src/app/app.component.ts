import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { filter, map, withLatestFrom } from 'rxjs/operators';
import { HandGesture } from './hand-gesture.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('video') video: ElementRef<HTMLVideoElement>;
  @ViewChild('canvas') canvas: ElementRef<HTMLCanvasElement>;
  @ViewChild('home') homeLink: ElementRef<HTMLAnchorElement>;
  @ViewChild('down') aboutLink: ElementRef<HTMLAnchorElement>;

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
    filter((value) => value === 'one' || value === 'two' || value === 'stop' ),
    map((value) => {
		if(value === 'stop'){
			return 'home';
		} if(value === 'two') {
			return 'down';
		}
    if(value === 'one'){
      return 'stop';
    }    
		           }
		)
		);

  //--------

  constructor(private _recognizer: HandGesture, private _router: Router) {
    this._recognizer.gesture$
      .pipe(
        filter((value) => value === 'ok'),
        withLatestFrom(this.selection$)
      )
      .subscribe(([_, page]) => this._router.navigateByUrl(page));
  }

  get stream(): MediaStream {
    return this._recognizer.stream;
  }

  ngAfterViewInit(): void {
    this._recognizer.initialize(
      this.canvas.nativeElement,
      this.video.nativeElement
    );
  }
}
