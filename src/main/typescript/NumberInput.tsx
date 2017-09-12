import * as React from "react";
import {TextInput, TextInputProps} from "./TextInput";

export interface NumberInputProps extends TextInputProps {
    numberFormat?: Intl.NumberFormat;
    invalidMessage?: string;
    numberValue?: number;
    onNumberChange?: (newValue?: number) => void;
}

export class NumberInput extends React.Component<NumberInputProps> {

    private inputRef: HTMLInputElement;

    private thousandSeparator: string;
    private decimalSeparator: string;

    private hasFocus = false;

    private static readonly DefaultNumberFormat = new Intl.NumberFormat();

    constructor(props: NumberInputProps) {
        super(props);

        this.initFormat(props);
    }

    get numberFormat() {
        return this.props.numberFormat || NumberInput.DefaultNumberFormat;
    }

    get invalidMessage() {
        return this.props.invalidMessage || 'Invalid number.';
    }

    componentWillReceiveProps(nextProps: NumberInputProps) {
        this.initFormat(nextProps);
    }

    private initFormat(props: NumberInputProps) {
        let numberFormat = props.numberFormat || NumberInput.DefaultNumberFormat;
        this.decimalSeparator = numberFormat.format(1.1).replace(/[01]/g, '');
        this.thousandSeparator = numberFormat.format(1111).replace(/[01]/g, '').replace(this.decimalSeparator, '');
    }

    private static replaceAll(str: string, search: string, replacement: string) {
        return str.split(search).join(replacement);
    }

    private handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.props.onChange && this.props.onChange(e);

        let newValue = this.updateState();
        this.props.onNumberChange && this.props.onNumberChange(newValue);
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
            this.props.onNumberChange && this.props.onNumberChange(newValue);
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
        if (this.thousandSeparator) {
            value = NumberInput.replaceAll(value, this.thousandSeparator, "");
        }
        if (this.decimalSeparator) {
            value = NumberInput.replaceAll(value, this.decimalSeparator, ".");
        }
        return Number.parseFloat(value);
    }

    private isValid(numberValue?: number): boolean {
        return typeof numberValue === 'number' && !Number.isNaN(numberValue);
    }

    private handleInputRef = (input: HTMLInputElement) => {
        this.inputRef = input;
        this.props.inputRef && this.props.inputRef(input);
    };

    private handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        let keyValue = String.fromCharCode(event.charCode);
        if (!keyValue.match(/[0-9]/g) && keyValue !== this.thousandSeparator && keyValue !== this.decimalSeparator) {
            event.preventDefault();
        }
    };

    render() {
        let {value, invalidMessage, numberValue, numberFormat, onNumberChange, inputRef, ...inputProps} = this.props;

        const isControlled = this.props.hasOwnProperty('numberValue');

        if (isControlled && !this.hasFocus) {
            const numberValue = this.props.numberValue;
            if (this.isValid(numberValue)) {
                value = this.numberFormat.format(numberValue as number);
            }
            else {
                value = '';
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
