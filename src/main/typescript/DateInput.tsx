import * as React from "react";
import {TextInput, TextInputProps} from "./TextInput";
import * as moment from "moment";

export class DateChangeEvent {
    valid:boolean;
    value:string;
    valueAsIsoDate?:string;
    // valueAsDate:Date; to support Date objects as values
}

export interface DateInputProps extends TextInputProps {
    format?:string;
    acceptFormat?:string;
    invalidMessage?:string;
    valueAsIsoDate?:string;
    // valueAsDate?:Date; to support Date objects as values
    onDateChange?:(e:DateChangeEvent) => void;
}

const IsoDateFormat = 'YYYY-MM-DD';

export class DateInput extends React.Component<DateInputProps, undefined> {

    private inputRef:HTMLInputElement;

    get format() {
        return this.props.format || IsoDateFormat;
    }

    get acceptFormat() {
        return this.props.acceptFormat || this.format;
    }

    get invalidMessage() {
        return this.props.invalidMessage || 'Invalid date.';
    }

    private handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        this.props.onChange && this.props.onChange(e);

        let dateChangeEvent = this.updateState(true);
        this.props.onDateChange && this.props.onDateChange(dateChangeEvent);
    };

    private handleBlur = (e:React.FocusEvent<HTMLInputElement>) => {
        this.props.onBlur && this.props.onBlur(e);

        let dateChangeEvent = this.updateState(false);
        if (dateChangeEvent.valid && dateChangeEvent.valueAsIsoDate) {
            this.inputRef.value = moment(dateChangeEvent.valueAsIsoDate, IsoDateFormat, true).format(this.format);
            // manually dispatch an event to notify the value has changed
            this.inputRef.dispatchEvent(new Event('input', { bubbles: true }));
        }

    };

    private updateState(strict:boolean):DateChangeEvent {
        let valid = true;
        let valueAsIsoDate;
        let value = this.inputRef.value;

        if (value) {
            let date = moment(this.inputRef.value, this.acceptFormat, strict);

            if (date.isValid()) {
                valueAsIsoDate = date.format(IsoDateFormat);

                valid = true;
            }
            else {
                valid = false;
            }
        }
        this.inputRef.setCustomValidity(valid ? '' : this.invalidMessage);

        return { valid, valueAsIsoDate, value };
    }

    private handleInputRef = (input:HTMLInputElement) => {
        this.inputRef = input;
        this.props.inputRef && this.props.inputRef(input);
    };

    render() {
        let value = this.props.value;

        if (this.props.valueAsIsoDate) {
            let date = moment(this.props.valueAsIsoDate, IsoDateFormat);
            value = date.format(this.format);
        }

        const { format, acceptFormat, invalidMessage, valueAsIsoDate, onDateChange, inputRef, ...inputProps } = this.props;

        return <TextInput {...inputProps}
                          value={value}
                          onChange={this.handleChange}
                          onBlur={this.handleBlur}
                          inputRef={this.handleInputRef} />
    }
}