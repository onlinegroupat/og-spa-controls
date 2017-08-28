/// <reference types="react" />
import * as React from "react";
import { TextInputProps } from "./TextInput";
export interface NumberInputProps extends TextInputProps {
    numberFormat?: Intl.NumberFormat;
    invalidMessage?: string;
    numberValue?: number;
    onNumberValueChange?: (newValue?: any) => void;
}
export declare class NumberInput extends React.Component<NumberInputProps> {
    private inputRef;
    private thousandSeparator;
    private decimalSeparator;
    private hasFocus;
    private static readonly DefaultNumberFormat;
    constructor(props: NumberInputProps);
    readonly numberFormat: Intl.NumberFormat;
    readonly invalidMessage: string;
    componentWillReceiveProps(nextProps: NumberInputProps): void;
    private initFormat(props);
    private static replaceAll(str, search, replacement);
    private handleChange;
    private handleFocus;
    private handleBlur;
    private updateState();
    private parseNumber(value);
    private isValid(numberValue?);
    private handleInputRef;
    private handleKeyPress;
    render(): JSX.Element;
}
