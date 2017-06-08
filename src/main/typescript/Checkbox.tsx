import * as React from "react";
import * as uuid from "uuid";
import {ClassList} from "./ClassList";

export interface CheckboxProps extends React.HTMLProps<HTMLInputElement> {
    className?:string;
    inputRef?:(input:HTMLInputElement) => void;
}

export interface CheckboxState {
}

export class Checkbox extends React.PureComponent<CheckboxProps, CheckboxState> {

    constructor(props?:CheckboxProps) {
        super(props);

        this.state = {
        };
    }

    private id:string;
    private ref:HTMLInputElement;

    private handleRef = (ref:HTMLInputElement) => {
        this.ref = ref;
        this.props.inputRef && this.props.inputRef(ref);
    };

    componentWillMount() {
        this.id = this.props.id || uuid();
    }

    render() {
        const { className, children, ...inputProps } = this.props;
        return (
            <div className={className}>
                <input type="checkbox" id={this.id} ref={this.handleRef} {...inputProps} />
                <label htmlFor={this.id}>
                    {children}
                </label>
            </div>
        )
    }
}