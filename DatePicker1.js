// datepicker-lib/DatePicker.js
class DatePicker {
    constructor(options) {
      this.options = options;
      this.selectedDate = options.selectedDate || null;
      this.init();
    }
  
    init() {
      this.updateHTML();
    }
  
    update(options) {
      this.options = options;
      this.updateHTML();
    }
  
    updateHTML() {
      const currentDate = new Date();
      const year = this.options.year || currentDate.getFullYear();
      const month = this.options.month || currentDate.getMonth();
  
      const prevMonth = month === 0 ? 11 : month - 1;
      const prevYear = month === 0 ? year - 1 : year;
      const nextMonth = month === 11 ? 0 : month + 1;
      const nextYear = month === 11 ? year + 1 : year;
  
      let calendarHTML = `<div class="datepicker" style="color: ${this.options.color}; font-size: ${this.options.fontSize};">`;
  
      // Navigation controls
      calendarHTML += `<div class="navigation">
                         <span class="arrow" onclick="changeMonth(${prevMonth}, ${prevYear})">&#9664;</span>
                         <span class="month">${this.getMonthName(month)} ${year}</span>
                         <span class="arrow" onclick="changeMonth(${nextMonth}, ${nextYear})">&#9654;</span>
                       </div>`;
  
      calendarHTML += '<table>';
  
      // Headers
      calendarHTML += '<tr>';
      for (let i = 0; i < 7; i++) {
        calendarHTML += `<th>${this.getDayName(i)}</th>`;
      }
      calendarHTML += '</tr>';
  
      // Days
      let day = 1;
      for (let i = 0; i < 6; i++) {
        calendarHTML += '<tr>';
        for (let j = 0; j < 7; j++) {
          if (i === 0 && j < this.getFirstDayOfMonth(year, month)) {
            calendarHTML += '<td></td>';
          } else if (day > this.getLastDayOfMonth(year, month)) {
            calendarHTML += '<td></td>';
          } else {
            const date = new Date(year, month, day);
            const isSelected = this.isSelected(date);
            calendarHTML += `<td class="${isSelected ? 'selected' : ''}" onclick="selectDate('${date.toISOString()}')">${day}</td>`;
            day++;
          }
        }
        calendarHTML += '</tr>';
      }
  
      calendarHTML += '</table></div>';
      this.datePickerHTML = calendarHTML;
  
      // Trigger callback if provided
      if (this.options.onUpdate) {
        this.options.onUpdate(this.selectedDate);
      }
    }
  
    getFirstDayOfMonth(year, month) {
      return new Date(year, month, 1).getDay();
    }
  
    getLastDayOfMonth(year, month) {
      return new Date(year, month + 1, 0).getDate();
    }
  
    isSelected(date) {
      return this.selectedDate && date.toDateString() === this.selectedDate.toDateString();
    }
  
    getMonthName(month) {
      const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      return monthNames[month];
    }
  
    getDayName(day) {
      const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      return dayNames[day];
    }
  
    getHTML() {
      return this.datePickerHTML;
    }
  }
  
  // Make the class exportable for use in different frameworks
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = DatePicker;
  }
  