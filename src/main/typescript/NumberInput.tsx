import * as React from "react";
import {TextInput, TextInputProps} from "./TextInput";

export interface NumberInputProps extends TextInputProps {
    numberFormat: Intl.NumberFormat;
    invalidMessage?: string;
    numberValue?: number;
    onNumberValueChange?: (newValue?: any) => void;
}

export class NumberInput extends React.Component<NumberInputProps> {

    private inputRef: HTMLInputElement;

    private thousandSeparator: string;
    private decimalSeparator: string;
    private hasFocus = false;

    get numberFormat() {
        return this.props.numberFormat;
    }

    get invalidMessage() {
        return this.props.invalidMessage || 'Falsche Eingabe.';
    }

    componentWillReceiveProps(nextProps: NumberInputProps) {
        this.thousandSeparator = this.numberFormat.format(1111).replace(/1/g, '');
        this.decimalSeparator = this.numberFormat.format(1.1).replace(/1/g, '');
    }

    private handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.props.onChange && this.props.onChange(e);

        let newValue = this.updateState();
        this.props.onNumberValueChange && this.props.onNumberValueChange(newValue);
    };

    private handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        this.hasFocus = true;
    };

    private handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        this.props.onBlur && this.props.onBlur(e);

        this.hasFocus = false;

        let newValue = this.updateState();
        if (this.isValid(newValue) && newValue) {
            this.inputRef.value = this.numberFormat.format(newValue);
            this.props.onNumberValueChange && this.props.onNumberValueChange(newValue);
        }
    };

    private updateState(): number | undefined {
        let numberValue: number | undefined = undefined;
        const value: string = this.inputRef.value;

        let validity = '';
        if (value) {
            numberValue = this.parseNumber(value);

            if (!this.isValid(numberValue)) {
                validity = this.invalidMessage;
            }
        }
        this.inputRef.setCustomValidity(validity);
        return numberValue;
    }

    private parseNumber(value: string) {
        value = value.replace(/[^0-9,.]/g, "");
        value = value.replace(/[.]/g, "");
        value = value.replace(/[,]/g, ".");
        let numberValue = Number.parseFloat(value);
        numberValue = Number.parseFloat(numberValue.toFixed(2));
        return numberValue;
    }

    private isValid(numberValue?: number): boolean {
        return typeof numberValue !== 'undefined' && !Number.isNaN(numberValue);
    }

    private handleInputRef = (input: HTMLInputElement) => {
        this.inputRef = input;
        this.props.inputRef && this.props.inputRef(input);
    };

    private handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        let keyValue: string = String.fromCharCode(event.charCode);
        let regex_cell: RegExp = /[^[0-9,.]]*/gi;
        if (keyValue.match(regex_cell)) {
            event.preventDefault();
        }
    };

    render() {
        let {value, invalidMessage, numberValue, onNumberValueChange, inputRef, ...inputProps} = this.props;
        if (!this.hasFocus) {
            if (typeof this.props.numberValue === "number" && this.isValid(this.props.numberValue)) {
                value = this.numberFormat.format(this.props.numberValue);
            }
        }

        return <TextInput {...inputProps}
                          value={value}
                          onKeyPress={this.handleKeyPress}
                          onChange={this.handleChange}
                          onBlur={this.handleBlur}
                          onFocus={this.handleFocus}
                          inputRef={this.handleInputRef}
        />
    }


}
