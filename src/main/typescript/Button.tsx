import * as React from "react";
import {HTMLAttributes} from "react";
import {ClassList} from "./ClassList";
import {MaterialIcon} from "./MaterialIcon";
import {Icon} from "./Icon";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    primary?:boolean;
    icon?:MaterialIcon;
}

export interface ButtonState {

}

export class Button extends React.Component<ButtonProps, ButtonState> {
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
