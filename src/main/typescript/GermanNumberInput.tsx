import * as React from "react";
import {TextInput, TextInputProps} from "./TextInput";

export interface GermanNumberInputProps extends TextInputProps {
    invalidMessage?:string;
    numberValue?:number;
    onNumberValueChange?:(newValue?:any) => void;
}

export class GermanNumberInput extends React.Component<GermanNumberInputProps> {

    componentWillReceiveProps(nextProps:NumberInputProps) {
        this.thousandSeparator = this.localeFormat.format(1111).replace(/1/g, '');
        this.decimalSeparator = this.localeFormat.format(1.1).replace(/1/g, '');
    } 

    private inputRef:HTMLInputElement; 

    private thousandSeparator:string; 
    private decimalSeparator:string;
    private hasFocus = false;

    get localeFormat() {
        return new Intl.NumberFormat('DE-de', { minimumFractionDigits: 2, maximumFractionDigits: 2});;
    }

    get invalidMessage() {
        return this.props.invalidMessage || 'Falsche Eingabe.';
    }

    private handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        this.props.onChange && this.props.onChange(e);

        let newValue = this.updateState();
        this.props.onNumberValueChange && this.props.onNumberValueChange(newValue);
    };

    private handleFocus = (e:React.FocusEvent<HTMLInputElement>) => {
        this.hasFocus = true;
    }

    private handleBlur = (e:React.FocusEvent<HTMLInputElement>) => {
        this.props.onBlur && this.props.onBlur(e);

        this.hasFocus = false;

        let newValue = this.updateState();
        if (this.isValid(newValue) && newValue) {
            this.inputRef.value = this.localeFormat.format(newValue);
            this.props.onNumberValueChange && this.props.onNumberValueChange(newValue);
        }
    };

    private updateState():number|undefined {
        let numberValue:number|undefined = undefined;
        const value:string = this.inputRef.value;

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

    private parseNumber(value:string) {
        value = value.replace(/[^0-9,.]/g, "");
        value = value.replace(/[.]/g, "");
        value = value.replace(/[,]/g,".");
        let numberValue = Number.parseFloat(value);
        numberValue = Number.parseFloat(numberValue.toFixed(2)); 
        return numberValue;
    }

    isValid(numberValue?:number):boolean {
        return typeof numberValue !== 'undefined' && !Number.isNaN(numberValue);
    }

    private handleInputRef = (input:HTMLInputElement) => {
        this.inputRef = input;
        this.props.inputRef && this.props.inputRef(input);
    };

    render() {
        let { value, invalidMessage, numberValue, onNumberValueChange, inputRef, ...inputProps } = this.props;
        if (!this.hasFocus) {
            if (typeof this.props.numberValue === "number" && this.isValid(this.props.numberValue)) {
                value = this.localeFormat.format(this.props.numberValue);
            } 
        }

        return <TextInput {...inputProps}
                          pattern="[0-9.]*[,][0-9]{1,2}"
                          value={value}
                          onChange={this.handleChange}
                          onBlur={this.handleBlur}
                          onFocus={this.handleFocus}
                          inputRef={this.handleInputRef}
                           />
    }


}
