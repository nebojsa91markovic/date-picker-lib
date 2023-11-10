// datepicker-lib/DatePickerVueWrapper.ts
import { defineComponent, ref, watch, onMounted } from 'vue';
import DatePicker from './DatePicker';

export default defineComponent({
  props: {
    options: Object, // Adjust the type based on your DatePicker options
  },
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
  template: `
    <div v-html="datePickerHTML"></div>
  `,
});
