import * as React from "react";
import * as uuid from "uuid";
import {ClassList} from "./ClassList";

export interface SelectFieldProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    className?:string;
    label:string;
    selectRef?:(input:HTMLSelectElement) => void;
}

export interface SelectFieldState {
    empty:boolean;
    validationMessage:string;
}
// TODO: extract common functionality shared with TextInput and TextAreaInput
export class SelectField extends React.PureComponent<SelectFieldProps, SelectFieldState> {

    constructor(props?:SelectFieldProps) {
        super(props);

        this.state = {
            empty: true,
            validationMessage: ''
        };
    }

    private id:string;
    private ref:HTMLSelectElement;

    private handleChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
        this.updateState();
        this.props.onChange && this.props.onChange(e);
    };

    private handleRef = (ref:HTMLSelectElement) => {
        this.ref = ref;
        this.props.selectRef && this.props.selectRef(ref);
        this.updateState();
    };

    private updateState() {
        if (this.ref) {
            let newEmpty = !this.ref.value;
            let newValidationMessage = this.ref.validationMessage || '';

            if (this.state.empty != newEmpty || this.state.validationMessage != newValidationMessage) {
                this.setState({
                    empty: newEmpty,
                    validationMessage: newValidationMessage
                });
            }
        }
    }

    componentWillMount() {
        this.id = this.props.id || uuid();
    }

    componentDidUpdate() {
        this.updateState();
    }

    render() {
        const { className, ...selectProps } = this.props;
        return (
            <div className={ClassList.compute(className, this.state.empty ? 'empty' : 'not-empty')}>
                <select id={this.id} onChange={this.handleChange} ref={this.handleRef} {...selectProps}>
                    { this.props.children }
                </select>
                <label htmlFor={this.id}>
                    {this.props.label}
                </label>
                <div className="bar" />
                <div className="validation-message">{this.state.validationMessage}</div>
            </div>
        )
    }
}