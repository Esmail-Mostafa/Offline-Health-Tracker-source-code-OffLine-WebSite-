import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MassIndexComponent } from './mass-index.component';

describe('MassIndexComponent', () => {
  let component: MassIndexComponent;
  let fixture: ComponentFixture<MassIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MassIndexComponent]
    });
    fixture = TestBed.createComponent(MassIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
