// datepicker-lib/DatePickerVueWrapper.ts
import DatePicker from './DatePicker';
import { Vue, CreateElement } from 'vue/types/vue';

export default Vue.extend({
  props: ['options'],
  data() {
    return {
      datePicker: null as DatePicker | null,
      datePickerHTML: '',
    };
  },
  watch: {
    options: {
      handler(newOptions: any): void {
        if (this.datePicker) {
          this.datePicker.update(newOptions);
          this.updateHTML();
        }
      },
      deep: true,
    },
  },
  mounted(): void {
    this.datePicker = new DatePicker(this.options);
    this.updateHTML();
  },
  methods: {
    updateHTML(): void {
      if (this.datePicker) {
        this.datePickerHTML = this.datePicker.getHTML();
      }
    },
  },
  render(createElement: CreateElement): any {
    return createElement('div', {
      domProps: {
        innerHTML: this.datePickerHTML,
      },
    });
  },
});
