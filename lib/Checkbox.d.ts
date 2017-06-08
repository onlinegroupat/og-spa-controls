/// <reference types="react" />
import * as React from "react";
export interface CheckboxProps extends React.HTMLProps<HTMLInputElement> {
    className?: string;
    inputRef?: (input: HTMLInputElement) => void;
}
export interface CheckboxState {
}
export declare class Checkbox extends React.PureComponent<CheckboxProps, CheckboxState> {
    constructor(props?: CheckboxProps);
    private id;
    private ref;
    private handleRef;
    componentWillMount(): void;
    render(): JSX.Element;
}
