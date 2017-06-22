/// <reference types="react" />
import * as React from "react";
import * as PropTypes from "prop-types";
export interface CheckboxGroupProps {
    className?: string;
    label?: string;
    checked?: string[];
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
export interface CheckboxGroupState {
}
export declare class CheckboxGroup extends React.PureComponent<CheckboxGroupProps, CheckboxGroupState> {
    constructor(props?: CheckboxGroupProps);
    getChildContext(): {
        checkboxGroup: {
            checked: string[] | undefined;
            onChange: React.EventHandler<React.ChangeEvent<HTMLInputElement>> | undefined;
        };
    };
    static childContextTypes: {
        checkboxGroup: PropTypes.Requireable<any>;
    };
    render(): JSX.Element;
}
export interface CheckboxProps extends React.HTMLAttributes<HTMLInputElement> {
    className?: string;
    inputRef?: (input: HTMLInputElement) => void;
}
export interface CheckboxState {
}
export declare class Checkbox extends React.Component<CheckboxProps, CheckboxState> {
    constructor(props?: CheckboxProps);
    static contextTypes: {
        checkboxGroup: PropTypes.Requireable<any>;
    };
    private id;
    private ref;
    private handleRef;
    private handleChange;
    componentWillMount(): void;
    render(): JSX.Element;
}
