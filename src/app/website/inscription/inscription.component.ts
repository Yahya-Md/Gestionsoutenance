import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import validate = WebAssembly.validate;

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  constructor() { }
  requiredFormControlnom = new FormControl('',[
    Validators.required,
  ]);
  requiredFormControlprenom = new FormControl('',[
    Validators.required,
  ]);
  requiredFormControlCin = new FormControl('',[
    Validators.required,
  ]);
  requiredFormControlCne = new FormControl('',[
    Validators.required,
  ]);
  requiredFormControlsujet = new FormControl('',[
    Validators.required,
  ]);
  requiredFormControldirecteur = new FormControl('',[
    Validators.required,
  ]);
  requiredFormControltel = new FormControl('',[
    Validators.required,
  ]);
  emailFormControl = new FormControl('',[
    Validators.email,
    Validators.required,
  ]
  );

  selected = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  selectFormControl = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  nativeSelectFormControl = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);
  ngOnInit(): void {
  }

}
