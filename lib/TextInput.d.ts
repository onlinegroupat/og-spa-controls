/// <reference types="react" />
import * as React from "react";
export interface TextInputProps extends React.HTMLProps<HTMLInputElement> {
    className?: string;
    label?: string;
    inputRef?: (input: HTMLInputElement) => void;
}
export interface TextInputState {
    empty: boolean;
}
export declare class TextInput extends React.Component<TextInputProps, TextInputState> {
    constructor(props?: TextInputProps);
    private id;
    private ref;
    private handleChange;
    private handleRef;
    private updateHasValue();
    componentWillMount(): void;
    componentDidUpdate(): void;
    render(): JSX.Element;
}
