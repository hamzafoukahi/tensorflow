import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stop1Component } from './stop1.component';

describe('Stop1Component', () => {
  let component: Stop1Component;
  let fixture: ComponentFixture<Stop1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Stop1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Stop1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
