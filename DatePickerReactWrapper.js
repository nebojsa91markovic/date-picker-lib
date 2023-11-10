// datepicker-lib/DatePickerReactWrapper.js
import React, { useEffect, useState } from 'react';
import DatePicker from './DatePicker';

const DatePickerReactWrapper = ({ options }) => {
  const [datePicker, setDatePicker] = useState(null);
  const [datePickerHTML, setDatePickerHTML] = useState('');

  useEffect(() => {
    setDatePicker(new DatePicker(options));
  }, [options]);

  useEffect(() => {
    if (datePicker) {
      setDatePickerHTML(datePicker.getHTML());
    }
  }, [datePicker]);

  return <div dangerouslySetInnerHTML={{ __html: datePickerHTML }} />;
};

export default DatePickerReactWrapper;
