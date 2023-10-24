import { Component } from '@angular/core';
import { FormControl, FormGroup, Validator } from '@angular/forms';

@Component({
  selector: 'app-body-fat',
  templateUrl: './body-fat.component.html',
  styleUrls: ['./body-fat.component.scss'],
})
export class BodyFatComponent {
  Data!: FormGroup;
  bfp!: number;
  visible: boolean = false;

  ngOnInit() {
    this.Data = new FormGroup({
      weight: new FormControl(''),
      height: new FormControl(''),
      waist: new FormControl(''),
      hip: new FormControl(''),
      neck: new FormControl(''),
      Geander: new FormControl(''),
    });
  }

  calculateBodyFatPercentage() {
    if (this.Data.value.Geander == 'Man') {
      const abdomenNeck = this.Data.value.waist - this.Data.value.neck;
      this.bfp =
        86.01 * Math.log10(abdomenNeck) -
        70.041 * Math.log10(this.Data.value.height) +
        36.76;
        this.visible = true
        
    } else if (this.Data.value.Geander == 'Woman') {
      const waistHipNeck =
        this.Data.value.waist + this.Data.value.hip - this.Data.value.neck;
      this.bfp =
        163.205 * Math.log10(waistHipNeck) -
        97.684 * Math.log10(this.Data.value.height) -
        78.387;
        this.visible = true

    } else {
      
      throw new Error('Invalid gender provided.');
    }
  }
}
