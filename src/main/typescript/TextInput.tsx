import * as React from "react";
import * as uuid from "uuid";
import {ClassList} from "./ClassList";

export interface TextInputProps extends React.HTMLProps<HTMLInputElement> {
    className?:string;
    label?:string;
    inputRef?:(input:HTMLInputElement) => void;
}

export interface TextInputState {
    empty:boolean;
}

export class TextInput extends React.Component<TextInputProps, TextInputState> {

    constructor(props?:TextInputProps) {
        super(props);

        this.state = {
            empty: true
        };
    }

    private id:string;
    private ref:HTMLInputElement;

    private handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        this.updateHasValue();
        this.props.onChange && this.props.onChange(e);
    };

    private handleRef = (ref:HTMLInputElement) => {
        this.ref = ref;
        this.props.inputRef && this.props.inputRef(ref);
    };

    private updateHasValue() {
        let newEmpty = !this.ref.value;

        if (this.state.empty != newEmpty) {
            this.setState({ empty: newEmpty });
        }
    }

    componentWillMount() {
        this.id = this.props.id || uuid();
    }

    componentDidUpdate() {
        this.updateHasValue();
    }

    render() {
        return (
            <div className={ClassList.compute(this.props.className, this.state.empty ? 'empty' : 'not-empty')}>
                <input id={this.id} onChange={this.handleChange} ref={this.handleRef} {...this.props} />
                { this.props.label && <label htmlFor={this.id}>{this.props.label}</label>}
                <span className="bar" />
            </div>
        )
    }
}