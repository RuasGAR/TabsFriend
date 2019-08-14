import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  registerForm: FormGroup;  

  constructor(public formbuilder: FormBuilder) { 

    this.registerForm = this.formbuilder.group({
      texto:[null, [Validators.required, Validators.maxLength(200)]]
    });
  }

  submitForm(form){
    console.log(form);
  }

  ngOnInit() {
  }

}
