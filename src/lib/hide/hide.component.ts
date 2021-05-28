import { Component, OnInit, ViewChild, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: 'mssn-pass-input',
  templateUrl: './hide.component.html',
  styleUrls: ['./hide.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => HideComponent),
      multi: true
    }
  ]
})
export class HideComponent implements ControlValueAccessor {

  @ViewChild("input") input;
  isHidden = true;

  @Input()
  placeholder = "";

  private _value:any;
  
  set value(v:any) {
    if (v !== this._value) {
      this._value = v;
      this.onChange(v);
      this.onTouched(v);
    }
  }

  writeValue(value: any) {
    this._value = value;
  }

  onChange = (_) => {};
  onTouched = (_) => {};

  registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }

  constructor() { }

  toggleShow = () => {
    let type = this.input.nativeElement.attributes.type.value;

    if (type == "text") {
      type = "password";
      this.isHidden = true;
    }  else {
      type = "text"
      this.isHidden = false;
    }

    this.input.nativeElement.attributes.type.value = type;
  }


}
