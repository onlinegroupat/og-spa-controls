import * as React from "react";
import * as uuid from "uuid";
import {ClassList} from "./ClassList";

export interface TextInputProps extends React.HTMLProps<HTMLInputElement> {
    className?:string;
    label:string;
    inputRef?:(input:HTMLInputElement) => void;
}

export interface TextInputState {
    empty:boolean;
    validationMessage:string;
}

export class TextInput extends React.Component<TextInputProps, TextInputState> {

    constructor(props?:TextInputProps) {
        super(props);

        this.state = {
            empty: true,
            validationMessage: ''
        };
    }

    private id:string;
    private ref:HTMLInputElement;

    private handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        this.updateState();
        this.props.onChange && this.props.onChange(e);
    };

    private handleRef = (ref:HTMLInputElement) => {
        this.ref = ref;
        this.props.inputRef && this.props.inputRef(ref);
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
        const { className, ...inputProps } = this.props;
        return (
            <div className={ClassList.compute(className, this.state.empty ? 'empty' : 'not-empty')}>
                <input id={this.id} onChange={this.handleChange} ref={this.handleRef} {...inputProps} />
                <label htmlFor={this.id}>
                    {this.props.label}
                </label>
                <div className="bar" />
                <div className="validation-message">{this.state.validationMessage}</div>
            </div>
        )
    }
}