// datepicker-lib/date-picker.component.ts
import { Component, Input, ElementRef, AfterViewInit } from '@angular/core';
import DatePicker from './DatePicker';

@Component({
  selector: 'app-date-picker',
  template: '',
})
export class DatePickerComponent implements AfterViewInit {
  private datePicker: DatePicker;

  @Input() options: any; // Adjust the type based on your configuration options

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.datePicker = new DatePicker(this.options);
    this.el.nativeElement.innerHTML = this.datePicker.getHTML();
  }
}
