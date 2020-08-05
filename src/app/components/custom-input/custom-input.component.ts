import { Component, OnInit, forwardRef, Injector, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => CustomInputComponent)
    }
  ]
})
export class CustomInputComponent implements ControlValueAccessor {
  
  @Input() label:string;
  @Input() id: string;
  @Input() mask: string;
  @Input() maxlength: number;
  @Input() type: string = "text";
  @Input() required: boolean = false;

  onChange: any = () => {}
  onTouch: any = () => {}
  valInput = ""

  constructor() { }

  set value(valInput: any){ 
    this.valInput = valInput;
    this.onChange(valInput)
    this.onTouch(valInput)
  }

  writeValue(value: any) { 
    this.value = value
  }

  registerOnChange(fn: any) {
    this.onChange = fn
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn
  }

}