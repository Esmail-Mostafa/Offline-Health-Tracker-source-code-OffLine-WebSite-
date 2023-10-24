import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreLandingComponent } from './pre-landing.component';

describe('PreLandingComponent', () => {
  let component: PreLandingComponent;
  let fixture: ComponentFixture<PreLandingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreLandingComponent]
    });
    fixture = TestBed.createComponent(PreLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
