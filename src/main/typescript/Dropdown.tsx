import * as React from "react";
import {ClassList} from "./ClassList";
import {ChildrenProps, ClassNameProps} from "./types";

export interface DropdownState {
    open:boolean;
}

export class Dropdown extends React.Component<React.HTMLAttributes<HTMLDivElement>, DropdownState> {

    constructor(props:React.HTMLAttributes<HTMLDivElement>) {
        super(props);

        this.state = {
            open: false
        };
    }

    private handleClickOutside = () => {
        this.setState({ open: false });
    };

    private handleClick = (e:React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        this.setState({ open: !this.state.open });
        this.props.onClick && this.props.onClick(e);
    };

    componentDidMount() {
        window.addEventListener("click", this.handleClickOutside);
    }

    componentWillUnmount() {
        window.removeEventListener("click", this.handleClickOutside);
    }

    render() {
        const { className = undefined, onClick = undefined, ...divProps } = {...this.props};
        return (
            <div className={ClassList.compute(className, this.state.open ? 'open' : '')}
                 onClick={this.handleClick}
                 {...divProps}>
                {this.props.children}
            </div>
        );
    }
}

export const DropdownToggle = (props:ChildrenProps & ClassNameProps) =>
    <div className={ClassList.compute(props.className, 'toggle')}>{props.children}</div>;

export const DropdownPopup = (props:ChildrenProps & ClassNameProps) =>
    <div className={ClassList.compute(props.className, 'popup')}>{props.children}</div>;