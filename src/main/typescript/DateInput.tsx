import * as React from "react";
import {TextInput, TextInputProps} from "./TextInput";
import * as moment from "moment";
import {MomentInput, unitOfTime} from "moment";

export interface DateInputProps extends TextInputProps {
    format?:string;
    acceptFormat?:string;
    invalidMessage?:string;
    dateValue?:moment.Moment|null;
    onDateChange?:(newValue:moment.Moment|null) => void;
}

const IsoDateFormat = 'YYYY-MM-DD';

export class DateInput extends React.Component<DateInputProps> {

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

        let newValue = this.updateState(true);
        this.props.onDateChange && this.props.onDateChange(newValue);
    };

    private handleBlur = (e:React.FocusEvent<HTMLInputElement>) => {
        this.props.onBlur && this.props.onBlur(e);

        let newValue = this.updateState(false);
        if (newValue != null && newValue.isValid()) {
            this.inputRef.value = newValue.format(this.format);
            this.props.onDateChange && this.props.onDateChange(newValue);
        }

    };

    private updateState(strict:boolean) {
        let dateValue = null;
        let value = this.inputRef.value;

        if (value) {
            dateValue = moment(this.inputRef.value, this.acceptFormat, strict);
        }
        this.inputRef.setCustomValidity((!dateValue || dateValue.isValid()) ? '' : this.invalidMessage);

        return dateValue;
    }

    private handleInputRef = (input:HTMLInputElement) => {
        this.inputRef = input;
        this.props.inputRef && this.props.inputRef(input);
    };

    render() {
        let value = this.props.value;

        if (typeof this.props.dateValue !== 'undefined') {
            if (this.props.dateValue !== null) {
                if (this.props.dateValue.isValid()) {
                    value = this.props.dateValue.format(this.format);
                }
            }
            else {
                value = '';
            }
        }

        const { format, acceptFormat, invalidMessage, dateValue, onDateChange, inputRef, ...inputProps } = this.props;

        return <TextInput {...inputProps}
                          value={value}
                          onChange={this.handleChange}
                          onBlur={this.handleBlur}
                          inputRef={this.handleInputRef} />
    }
}