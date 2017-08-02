/// <reference types="react" />
import * as React from "react";
import * as PropTypes from "prop-types";
export interface RadioGroupProps {
    className?: string;
    label?: string;
    name?: string;
    checked?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
export declare class RadioGroup extends React.PureComponent<RadioGroupProps> {
    private name;
    constructor(props?: RadioGroupProps);
    componentWillMount(): void;
    getChildContext(): {
        radioGroup: {
            checked: string | undefined;
            name: string;
            onChange: React.EventHandler<React.ChangeEvent<HTMLInputElement>> | undefined;
        };
    };
    static childContextTypes: {
        radioGroup: PropTypes.Requireable<any>;
    };
    render(): JSX.Element;
}
export interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    inputRef?: (input: HTMLInputElement) => void;
}
export declare class RadioButton extends React.Component<RadioButtonProps> {
    constructor(props?: RadioButtonProps);
    static contextTypes: {
        radioGroup: PropTypes.Requireable<any>;
    };
    private id;
    private ref;
    private handleRef;
    private handleChange;
    componentWillMount(): void;
    render(): JSX.Element;
}
