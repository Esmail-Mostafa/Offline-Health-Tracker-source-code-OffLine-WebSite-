import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterNeedsComponent } from './water-needs.component';

describe('WaterNeedsComponent', () => {
  let component: WaterNeedsComponent;
  let fixture: ComponentFixture<WaterNeedsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WaterNeedsComponent]
    });
    fixture = TestBed.createComponent(WaterNeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
