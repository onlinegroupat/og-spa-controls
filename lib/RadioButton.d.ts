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
    private name?;
    constructor(props: RadioGroupProps);
    componentWillMount(): void;
    getChildContext(): {
        radioGroup: {
            checked: import("./ClassList").ClassNameType;
            name: import("./ClassList").ClassNameType;
            onChange: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
        };
    };
    static childContextTypes: {
        radioGroup: PropTypes.Requireable<object>;
    };
    render(): JSX.Element;
}
export interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    inputRef?: (input: HTMLInputElement) => void;
}
export declare class RadioButton extends React.Component<RadioButtonProps> {
    constructor(props: RadioButtonProps);
    static contextTypes: {
        radioGroup: PropTypes.Requireable<object>;
    };
    private id?;
    private ref?;
    private handleRef;
    private handleChange;
    componentWillMount(): void;
    render(): JSX.Element;
}
