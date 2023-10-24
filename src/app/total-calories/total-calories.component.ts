import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator } from '@angular/forms';

@Component({
  selector: 'app-total-calories',
  templateUrl: './total-calories.component.html',
  styleUrls: ['./total-calories.component.scss'],
})
export class TotalCaloriesComponent implements OnInit {
  Data!: FormGroup;
  BMR!: number;
  TotalCAloures!:number
  visible: boolean = false;

  ngOnInit() {
    this.Data = new FormGroup({
      weight: new FormControl(''),
      height: new FormControl(''),
      age: new FormControl(''),
      Geander: new FormControl(''),
      Activity: new FormControl(''),
    });
  }

  Calculate() {
    if (this.Data.value.Geander == 'Man') {
      this.BMR =
        10 * this.Data.value.weight +
        6.25 * this.Data.value.height -
        5 * this.Data.value.age +
        5;
       this.TotalCAloures = this.BMR *this.Data.value.Activity
    } else {
      this.BMR =
        10 * this.Data.value.weight +
        6.25 * this.Data.value.height -
        5 * this.Data.value.age -
        161;
        this.TotalCAloures = this.BMR *this.Data.value.Activity

    }
    this.visible = true;

  }
  showDialog() {
}
}
