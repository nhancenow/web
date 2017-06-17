import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ui-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {

  @Input()
  public disabled: boolean = false;

  @Input()
  public type: string;

  @Input()
  public label: string;

  @Output()
  onChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  checked: boolean = false;
  _onChange = (_: any) => { };
  
  constructor() { }

  ngOnInit() {
  }
  
  writeValue(value: boolean): void {
    this.checked = value;
    this._onChange(value);
    this.onChange.next(value);
  }

  toggleCheck(event: any): void {
    if (this.disabled) {
      return;
    }
    var value: boolean = !this.checked
    this.writeValue(value);
    alert(value)
  }

}
