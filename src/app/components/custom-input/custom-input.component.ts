import { Component, OnInit, forwardRef, Injector, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl } from '@angular/forms';


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
  control: FormControl;
  constructor() {
    this.control = new FormControl('input');
  }

  ngOnInit() {
    this.control.valueChanges.subscribe((value) => {
      this.onChange(value)
      this.onTouch(value)
    });
  }

  writeValue(value: any) { 
    if (value === null) {
      this.control.reset();
      return;
    }
    this.control.setValue(value);
  }

  registerOnChange(fn: any) {
    this.onChange = fn
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn
  }

}