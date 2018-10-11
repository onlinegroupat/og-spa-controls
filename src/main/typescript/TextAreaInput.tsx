import * as React from "react";
import * as uuid from "uuid";
import {ClassList} from "./ClassList";

export interface TextAreaInputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    className?:string;
    label:string;
    textAreaRef?:(input:HTMLTextAreaElement) => void;
}

export interface TextAreaInputState {
    empty:boolean;
    validationMessage:string;
}

// TODO: extract common base from TextInput and TextAreaInput
export class TextAreaInput extends React.PureComponent<TextAreaInputProps, TextAreaInputState> {

    constructor(props:TextAreaInputProps) {
        super(props);

        this.state = {
            empty: true,
            validationMessage: ''
        };
    }

    private id?:string;
    private ref?:HTMLTextAreaElement;

    private handleChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        this.updateState();
        this.props.onChange && this.props.onChange(e);
    };

    private handleRef = (ref:HTMLTextAreaElement) => {
        this.ref = ref;
        this.props.textAreaRef && this.props.textAreaRef(ref);
        this.updateState();
    };

    private updateHeight() {
        if (this.ref) {
            this.ref.style.height = "";
            this.ref.style.height = this.ref.scrollHeight + 1 + "px";
        }
    }

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
            this.updateHeight();
        }
    }

    componentWillMount() {
        this.id = this.props.id || uuid();
    }

    componentDidUpdate() {
        this.updateState();
    }

    render() {
        const { className, ...textareaProps } = this.props;
        return (
            <div className={ClassList.compute(className, this.state.empty ? 'empty' : 'not-empty')}>
                <textarea id={this.id} onChange={this.handleChange} ref={this.handleRef} {...textareaProps} />
                <label htmlFor={this.id}>
                    {this.props.label}
                </label>
                <div className="bar" />
                <div className="validation-message">{this.state.validationMessage}</div>
            </div>
        )
    }
}