import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-msg-validator',
  templateUrl: './form-msg-validator.component.html',
  styleUrls: ['./form-msg-validator.component.scss']
})
export class FormMsgValidatorComponent implements OnInit {

  @Input() required = 'Este campo é obrigatorio';
  @Input() min = 'texto pequeno';
  @Input() max = 'texto muito grande';
  @Input() email = 'Email Inválido';
  @Input() mismatch = 'os campos não comferem';
  @Input() control: FormControl;
  @Input() controlCompareValue: FormControl;

  notEqual = false;

  constructor() {}

  ngOnInit(): void {
    if (this.controlCompareValue) {
      this.controlCompareValue?.valueChanges.subscribe((value) => {

        if (this.control.value !== value) {

          this.notEqual = true;
        } else {
          this.notEqual = false;
        }
      });

      this.control.valueChanges.subscribe((value) => {

        if (this.controlCompareValue?.value !== value) {

          this.notEqual = true;
        } else {
          this.notEqual = false;
        }
      });
    }
  }

}
