/// <reference types="react" />
import * as React from "react";
export interface SelectFieldProps extends React.HTMLProps<HTMLSelectElement> {
    className?: string;
    label: string;
    selectRef?: (input: HTMLSelectElement) => void;
}
export interface SelectFieldState {
    empty: boolean;
    validationMessage: string;
}
export declare class SelectField extends React.PureComponent<SelectFieldProps, SelectFieldState> {
    constructor(props?: SelectFieldProps);
    private id;
    private ref;
    private handleChange;
    private handleRef;
    private updateState();
    componentWillMount(): void;
    componentDidUpdate(): void;
    render(): JSX.Element;
}
