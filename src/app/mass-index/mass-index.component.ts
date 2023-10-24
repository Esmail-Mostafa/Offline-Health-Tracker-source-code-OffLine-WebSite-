import { Component } from '@angular/core';
import { FormControl, FormGroup, Validator } from '@angular/forms';

@Component({
  selector: 'app-mass-index',
  templateUrl: './mass-index.component.html',
  styleUrls: ['./mass-index.component.scss'],
})
export class MassIndexComponent {
  Data!: FormGroup;
  BMI!: number;
  TotalCAloures!: number;
  visible: boolean = false;

  ngOnInit() {
    this.Data = new FormGroup({
      weight: new FormControl(''),
      height: new FormControl(''),
    });
  }
value :string =""
  Calculate() {

    this.BMI =
      (this.Data.value.weight /
        this.Data.value.height /
        this.Data.value.height) *
      10000;
       if(this.BMI <= 18.5){
        this.value = "Underweight"
       }else if(this.BMI >= 18.5 && this.BMI <= 24.9){
        
        this.value = "Healthy Weight"

       }else if(this.BMI >= 25.0 && this.BMI <= 29.9){
        
        this.value = "Overweight"

       }else{
        this.value = "Obesity"

       }
    this.visible = true;
  }
}
