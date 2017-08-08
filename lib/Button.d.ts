/// <reference types="react" />
import * as React from "react";
import { MaterialIcon } from "./MaterialIcon";
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    primary?: boolean;
    icon?: MaterialIcon;
}
export declare class Button extends React.Component<ButtonProps> {
    render(): JSX.Element;
}
export declare class ButtonGroup extends React.Component<React.HTMLAttributes<HTMLDivElement>> {
    render(): JSX.Element;
}
