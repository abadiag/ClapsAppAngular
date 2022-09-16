import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoyWrappedComponent } from './joy-wrapped.component';

describe('JoyWrappedComponent', () => {
  let component: JoyWrappedComponent;
  let fixture: ComponentFixture<JoyWrappedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoyWrappedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoyWrappedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
