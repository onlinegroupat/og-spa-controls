/// <reference types="react" />
import * as React from "react";
export interface TextAreaInputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    className?: string;
    label: string;
    textAreaRef?: (input: HTMLTextAreaElement) => void;
}
export interface TextAreaInputState {
    empty: boolean;
    validationMessage: string;
}
export declare class TextAreaInput extends React.PureComponent<TextAreaInputProps, TextAreaInputState> {
    constructor(props?: TextAreaInputProps);
    private id;
    private ref;
    private handleChange;
    private handleRef;
    private updateHeight();
    private updateState();
    componentWillMount(): void;
    componentDidUpdate(): void;
    render(): JSX.Element;
}
