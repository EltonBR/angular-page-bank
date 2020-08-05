import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-msg-validator',
  templateUrl: './form-msg-validator.component.html',
  styleUrls: ['./form-msg-validator.component.scss']
})
export class FormMsgValidatorComponent implements OnInit {

  @Input() required             : string = "Este campo é obrigatorio";
  @Input() min                  : string = "texto pequeno";
  @Input() max                  : string = "texto muito grande";
  @Input() email                : string = "Email Inválido";
  @Input() mismatch             : string = "os campos não comferem";

  @Input() control              : FormControl;
  @Input() controlCompareValue  : FormControl;

  notEqual: boolean = false;

  constructor() {
   
  }

  ngOnInit(): void {
    if (this.controlCompareValue) {
      this.controlCompareValue?.valueChanges.subscribe((value) => {
        if(this.control.value !== value) {
          this.notEqual = true;
        } else {
          this.notEqual = false;
        }
      });

      this.control.valueChanges.subscribe((value) => {
        if(this.controlCompareValue?.value !== value) {
          this.notEqual = true;
        } else {
          this.notEqual = false;
        }
      });
    }
  }

}
