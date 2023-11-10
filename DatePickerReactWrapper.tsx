// datepicker-lib/DatePickerReactWrapper.tsx
import React, { useState, useEffect } from 'react';
import DatePicker from './DatePicker';

interface DatePickerReactWrapperProps {
  options: any; // Adjust the type based on your DatePicker options
}

const DatePickerReactWrapper: React.FC<DatePickerReactWrapperProps> = ({ options }) => {
  const [datePicker, setDatePicker] = useState<DatePicker | null>(null);
  const [datePickerHTML, setDatePickerHTML] = useState<string>('');

  useEffect(() => {
    const initDatePicker = () => {
      const newDatePicker = new DatePicker(options);
      setDatePicker(newDatePicker);
      updateHTML(newDatePicker);
    };

    initDatePicker();
  }, [options]);

  const handleUpdate = (selectedDate: Date) => {
    console.log('Selected Date:', selectedDate);
  };

  const updateHTML = (dp: DatePicker) => {
    setDatePickerHTML(dp.getHTML());
  };

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: datePickerHTML }} />
    </div>
  );
};

export default DatePickerReactWrapper;
