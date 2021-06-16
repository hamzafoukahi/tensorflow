import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stop2Component } from './stop2.component';

describe('Stop2Component', () => {
  let component: Stop2Component;
  let fixture: ComponentFixture<Stop2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Stop2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Stop2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
