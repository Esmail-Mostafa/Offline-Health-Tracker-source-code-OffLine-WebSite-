import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyFatComponent } from './body-fat.component';

describe('BodyFatComponent', () => {
  let component: BodyFatComponent;
  let fixture: ComponentFixture<BodyFatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyFatComponent]
    });
    fixture = TestBed.createComponent(BodyFatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
