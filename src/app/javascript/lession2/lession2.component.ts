import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-lession2',
  templateUrl: './lession2.component.html',
  styleUrls: ['./lession2.component.scss']
})
export class Lession2Component {

  myForm: FormGroup;

  constructor() {
    // Initialize the form group with form controls
    this.myForm = new FormGroup({
      username: new FormControl('Bhim', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      address: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    } else {
      console.log('Form is not valid');
    }
  }

}
