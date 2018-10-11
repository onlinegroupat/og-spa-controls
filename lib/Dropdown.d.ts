import * as React from "react";
import { ChildrenProps, ClassNameProps } from "./types";
interface DropdownState {
    open: boolean;
}
export declare class Dropdown extends React.Component<React.HTMLAttributes<HTMLDivElement>, DropdownState> {
    constructor(props: React.HTMLAttributes<HTMLDivElement>);
    private handleClickOutside;
    private handleClick;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export declare const DropdownToggle: (props: ChildrenProps & ClassNameProps) => JSX.Element;
export declare const DropdownPopup: (props: ChildrenProps & ClassNameProps) => JSX.Element;
export {};
