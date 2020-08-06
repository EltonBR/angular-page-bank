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
export class CustomInputComponent implements ControlValueAccessor, OnInit {
  valInput = '';

  @Input() label: string;
  @Input() id: string;
  @Input() mask: string;
  @Input() maxlength: number;
  @Input() type = 'text';
  @Input() required = false;

  control: FormControl;

  onChange: any = () => {};
  onTouch: any = () => {};
  constructor() {

    this.control = new FormControl('');
  }

  ngOnInit(): void {

    this.control.valueChanges.subscribe((value) => {
      this.onChange(value);
      this.onTouch(value);
    });
  }

  writeValue(value: any): void {

    if (value === null) {
      this.control.reset();
      return;
    }
    this.control.setValue(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

}
