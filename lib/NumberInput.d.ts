import * as React from "react";
import { TextInputProps } from "./TextInput";
export interface NumberInputProps extends TextInputProps {
    numberFormat?: Intl.NumberFormat;
    invalidMessage?: string;
    numberValue?: number;
    onNumberChange?: (newValue?: number) => void;
}
export declare class NumberInput extends React.Component<NumberInputProps> {
    private inputRef?;
    private thousandSeparator;
    private decimalSeparator;
    private hasFocus;
    private static readonly DefaultNumberFormat;
    constructor(props: NumberInputProps);
    readonly numberFormat: Intl.NumberFormat;
    readonly invalidMessage: string;
    componentWillReceiveProps(nextProps: NumberInputProps): void;
    private initFormat;
    private static replaceAll;
    private handleChange;
    private handleFocus;
    private handleBlur;
    private updateState;
    private parseNumber;
    private isValid;
    private handleInputRef;
    private handleKeyPress;
    render(): JSX.Element;
}
