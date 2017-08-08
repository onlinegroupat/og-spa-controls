import * as React from "react";
import {HTMLAttributes} from "react";
import {ClassList} from "./ClassList";
import {MaterialIcon} from "./MaterialIcon";
import {Icon} from "./Icon";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    primary?:boolean;
    icon?:MaterialIcon;
}

export class Button extends React.Component<ButtonProps> {
    render() {
        const { className, primary, icon, children, ...buttonProps } = this.props;
        return (
            <button className={ClassList.compute(className, primary ? 'primary' : undefined)} {...buttonProps}>
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
