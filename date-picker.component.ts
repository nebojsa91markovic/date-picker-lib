// datepicker-lib/src/app/date-picker/date-picker.component.ts
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import DatePicker  from './DatePicker';

@Component({
  selector: 'app-date-picker',
  template: `
    <div [innerHTML]="datePickerHTML"></div>
  `,
})
export class DatePickerComponent implements OnChanges {
  @Input() options: any; // Adjust the type based on your DatePicker options

  private datePicker: DatePicker | null = null;
  datePickerHTML: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.options) {
      this.updateDatePicker();
    }
  }

  private updateDatePicker(): void {
    if (!this.datePicker) {
      this.datePicker = new DatePicker(this.options);
      this.updateHTML();
    } else {
      this.datePicker.update(this.options);
      this.updateHTML();
    }
  }

  private updateHTML(): void {
    if (this.datePicker) {
      this.datePickerHTML = this.datePicker.getHTML();
    }
  }
}
