import { Component } from '@angular/core';
import { FormControl, FormGroup, Validator } from '@angular/forms';

@Component({
  selector: 'app-water-needs',
  templateUrl: './water-needs.component.html',
  styleUrls: ['./water-needs.component.scss']
})

export class WaterNeedsComponent {
  Data!: FormGroup;
  visible: boolean = false;

  ngOnInit() {
    this.Data = new FormGroup({
      weight: new FormControl(''),
     
    });
  }
  waterIntakeLiters:any
  Calculate() {
    const waterIntake = this.Data.value.weight * 30;
    this.waterIntakeLiters = waterIntake / 1000;
  this.visible = true
  }
}
