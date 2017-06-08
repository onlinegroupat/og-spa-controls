/// <reference types="react" />
import * as React from "react";
import { HTMLAttributes } from "react";
export interface TextInputProps extends HTMLAttributes<HTMLInputElement> {
    className?: string;
    label: string;
    inputRef?: (input: HTMLInputElement) => void;
}
export interface TextInputState {
    empty: boolean;
    validationMessage: string;
}
export declare class TextInput extends React.PureComponent<TextInputProps, TextInputState> {
    constructor(props?: TextInputProps);
    private id;
    private ref;
    private handleChange;
    private handleRef;
    private updateState();
    componentWillMount(): void;
    componentDidUpdate(): void;
    render(): JSX.Element;
}
