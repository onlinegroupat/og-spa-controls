/// <reference types="react" />
import * as React from "react";
import { TextInputProps } from "./TextInput";
export declare class DateChangeEvent {
    valid: boolean;
    value: string;
    valueAsIsoDate?: string;
}
export interface DateInputProps extends TextInputProps {
    format?: string;
    acceptFormat?: string;
    invalidMessage?: string;
    valueAsIsoDate?: string;
    onDateChange?: (e: DateChangeEvent) => void;
}
export declare class DateInput extends React.Component<DateInputProps> {
    private inputRef;
    readonly format: string;
    readonly acceptFormat: string;
    readonly invalidMessage: string;
    private handleChange;
    private handleBlur;
    private updateState(strict);
    private handleInputRef;
    render(): JSX.Element;
}
