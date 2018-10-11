import * as React from "react";
export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    label: string;
    inputRef?: (input: HTMLInputElement) => void;
    message?: React.ReactNode;
}
export interface TextInputState {
    empty: boolean;
    validationMessage: string;
}
export declare class TextInput extends React.PureComponent<TextInputProps, TextInputState> {
    constructor(props: TextInputProps);
    private id?;
    private ref?;
    private handleChange;
    private handleRef;
    private updateState;
    componentWillMount(): void;
    componentDidUpdate(): void;
    render(): JSX.Element;
}
