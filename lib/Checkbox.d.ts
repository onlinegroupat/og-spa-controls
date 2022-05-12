import * as React from "react";
import * as PropTypes from "prop-types";
import { PropsWithChildren } from "react";
export interface CheckboxGroupProps {
    className?: string;
    label?: string;
    checked?: string[];
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
export declare class CheckboxGroup extends React.PureComponent<PropsWithChildren<CheckboxGroupProps>> {
    constructor(props: CheckboxGroupProps);
    getChildContext(): {
        checkboxGroup: {
            checked: string[] | undefined;
            onChange: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
        };
    };
    static childContextTypes: {
        checkboxGroup: PropTypes.Requireable<object>;
    };
    render(): JSX.Element;
}
export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    inputRef?: (input: HTMLInputElement) => void;
}
export declare class Checkbox extends React.Component<CheckboxProps> {
    constructor(props: CheckboxProps);
    static contextTypes: {
        checkboxGroup: PropTypes.Requireable<object>;
    };
    private id?;
    private ref?;
    private handleRef;
    private handleChange;
    componentWillMount(): void;
    render(): JSX.Element;
}
