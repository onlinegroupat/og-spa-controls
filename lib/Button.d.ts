/// <reference types="react" />
import * as React from "react";
import { MaterialIcon } from "./MaterialIcon";
export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    primary?: boolean;
    icon?: MaterialIcon;
}
export interface ButtonState {
}
export declare class Button extends React.Component<ButtonProps, ButtonState> {
    render(): JSX.Element;
}
