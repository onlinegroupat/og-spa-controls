import * as React from "react";
import {HTMLAttributes} from "react";
import {ClassList} from "./ClassList";
import {MaterialIcon} from "./MaterialIcon";
import {Icon} from "./Icon";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    primary?:boolean;
    secondary?:boolean;
    danger?:boolean;
    icon?:MaterialIcon;
}

export class Button extends React.Component<ButtonProps> {
    render() {
        const { className, primary, secondary, danger, icon, children, ...buttonProps } = this.props;

        const classList = ClassList.compute(
            className,
            primary ? 'primary' : undefined,
            secondary ? 'secondary' : undefined,
            danger ? 'danger' : undefined,
        );

        return (
            <button className={classList} {...buttonProps}>
                {icon && <Icon>{icon}</Icon>}
                {' '}
                {children}
            </button>
        );
    }
}

// only a div for now...
export class ButtonGroup extends React.Component<React.HTMLAttributes<HTMLDivElement>> {
    render() {
        return <div {...this.props}/>;
    }
}
