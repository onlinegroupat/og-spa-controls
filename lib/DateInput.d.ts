import * as React from "react";
import { TextInputProps } from "./TextInput";
import * as moment from "moment";
export interface DateInputProps extends TextInputProps {
    format?: string;
    acceptFormat?: string;
    invalidMessage?: string;
    dateValue?: moment.Moment;
    onDateChange?: (newValue?: moment.Moment) => void;
}
export declare class DateInput extends React.Component<DateInputProps> {
    private inputRef?;
    private hasFocus;
    get format(): string;
    get acceptFormat(): string;
    get invalidMessage(): string;
    private handleChange;
    private handleFocus;
    private handleBlur;
    private notifyDateChange;
    private updateState;
    private handleInputRef;
    render(): JSX.Element;
}
