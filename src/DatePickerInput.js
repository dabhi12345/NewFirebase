import React from "react";
import { DatePickerInput } from "rc-datepicker";
import "rc-datepicker/lib/style.css";

export default class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: this.props.DateValue,
      // selectedDate1:this.props.DateValue.getDate(),
      // selectedMonth:this.props.DateValue.getMonth()+1,
      // selectedYear:this.props.DateValue.getFullYear(),
      onChangeEvent: this.props.onChangeEvent
    };
  }

  render() {
    return (
      <div>
        <DatePickerInput
          onChange={this.state.onChangeEvent}
          value={this.state.selectedDate}
          className="my-custom-datepicker-component"
        />
      </div>
    );
  }
}
