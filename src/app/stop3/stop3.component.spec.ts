import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stop3Component } from './stop3.component';

describe('Stop3Component', () => {
  let component: Stop3Component;
  let fixture: ComponentFixture<Stop3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Stop3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Stop3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
