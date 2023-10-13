import * as React from "react";
import {TextInput, TextInputProps} from "./TextInput";
import * as moment from "moment";

export interface DateInputProps extends TextInputProps {
    format?: string;
    acceptFormat?: string;
    invalidMessage?: string;
    dateValue?: moment.Moment;
    onDateChange?: (newValue?: moment.Moment) => void;
}

const IsoDateFormat = 'YYYY-MM-DD';

export class DateInput extends React.Component<DateInputProps> {

    private inputRef?: HTMLInputElement;
    private hasFocus = false;

    get format() {
        return this.props.format || IsoDateFormat;
    }

    get acceptFormat() {
        return this.props.acceptFormat || this.format;
    }

    get invalidMessage() {
        return this.props.invalidMessage || 'Invalid date.';
    }

    private handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.props.onChange && this.props.onChange(e);

        let newValue = this.updateState(true);
        this.notifyDateChange(newValue);
    };

    private handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        this.props.onFocus && this.props.onFocus(e);
        this.hasFocus = true;
    };

    private handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        if (this.inputRef) {
            this.props.onBlur && this.props.onBlur(e);
            this.hasFocus = false;

            let newValue = this.updateState(false);
            if (newValue && newValue.isValid()) {
                this.inputRef.value = newValue.format(this.format);
            }
            this.notifyDateChange(newValue);
        }
    };

    private notifyDateChange(newValue?:moment.Moment) {
        if (this.inputRef) {
            try {
                this.props.onDateChange && this.props.onDateChange(newValue);
                this.inputRef.setCustomValidity((!newValue || newValue.isValid()) ? '' : this.invalidMessage);
            }
            catch (error) {
                this.inputRef.setCustomValidity(error.toString());
            }
        }
    }

    private updateState(strict: boolean) {
        if (this.inputRef) {
            const value = this.inputRef.value;
            return value ? moment(value, this.acceptFormat, strict) : undefined;
        }
    }

    private handleInputRef = (input: HTMLInputElement) => {
        this.inputRef = input;
        this.props.inputRef && this.props.inputRef(input);
    };

    render() {
        let value = this.props.value;

        const isControlled = this.props.hasOwnProperty('dateValue');

        if (isControlled && !this.hasFocus) {
            const dateValue = this.props.dateValue;
            if (dateValue && dateValue.isValid()) {
                value = dateValue.format(this.format);
            }
            else {
                value = '';
            }
        }

        const {format, acceptFormat, invalidMessage, dateValue, onDateChange, inputRef, ...inputProps} = this.props;

        return <TextInput {...inputProps}
                          value={value}
                          onChange={this.handleChange}
                          onFocus={this.handleFocus}
                          onBlur={this.handleBlur}
                          inputRef={this.handleInputRef}/>
    }
}