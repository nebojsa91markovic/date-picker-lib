// datepicker-lib/DatePickerVueWrapper.js
import DatePicker from './DatePicker';

export default {
  props: ['options'],
  data() {
    return {
      datePicker: null,
      datePickerHTML: '',
    };
  },
  watch: {
    options: {
      handler(newOptions) {
        this.datePicker.update(newOptions);
        this.updateHTML();
      },
      deep: true,
    },
  },
  mounted() {
    this.datePicker = new DatePicker(this.options);
    this.updateHTML();
  },
  methods: {
    updateHTML() {
      this.datePickerHTML = this.datePicker.getHTML();
    },
  },
  render() {
    return this.$createElement('div', {
      domProps: {
        innerHTML: this.datePickerHTML,
      },
    });
  },
};
