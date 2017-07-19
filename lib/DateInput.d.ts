/// <reference types="react" />
import * as React from "react";
import { TextInputProps } from "./TextInput";
import * as moment from "moment";
export interface DateInputProps extends TextInputProps {
    format?: string;
    acceptFormat?: string;
    invalidMessage?: string;
    dateValue?: moment.Moment | null;
    onDateChange?: (newValue: moment.Moment | null) => void;
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
