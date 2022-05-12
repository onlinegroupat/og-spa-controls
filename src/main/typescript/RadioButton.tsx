import * as React from "react";
import * as uuid from "uuid";
import * as PropTypes from "prop-types";
import {PropsWithChildren} from "react";

export interface RadioGroupProps {
    className?: string;
    label?: string;
    name?: string;
    checked?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const RadioGroupContextTypes = {
    radioGroup: PropTypes.object
};

export class RadioGroup extends React.PureComponent<PropsWithChildren<RadioGroupProps>> {

    private name?:string;

    constructor(props: RadioGroupProps) {
        super(props);

        this.state = {};
    }

    componentWillMount() {
        this.name = this.props.name || uuid();
    }

    getChildContext() {
        return {
            radioGroup: {
                checked: this.props.checked,
                name: this.name,
                onChange: this.props.onChange
            }
        };
    }

    static childContextTypes = RadioGroupContextTypes;

    render() {
        return (
            <div className={this.props.className}>
                <label>
                    {this.props.label}
                </label>
                <div className="radio-buttons">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    inputRef?: (input: HTMLInputElement) => void;
}

export class RadioButton extends React.Component<RadioButtonProps> {

    constructor(props: RadioButtonProps) {
        super(props);

        this.state = {};
    }

    static contextTypes = RadioGroupContextTypes;

    private id?: string;
    private ref?: HTMLInputElement;

    private handleRef = (ref: HTMLInputElement) => {
        this.ref = ref;
        this.props.inputRef && this.props.inputRef(ref);
    };

    private handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        // call change handler of parent CheckboxGroup
        this.context.radioGroup.onChange(e);
        // call handler that was set via props
        this.props.onChange && this.props.onChange(e);
    };

    componentWillMount() {
        this.id = this.props.id || uuid();
    }

    render() {
        let {className, children, value, checked, onChange, name, title, ...inputProps} = this.props;

        // handle a RadioGroup parent
        let radioGroup = this.context.radioGroup;
        if (radioGroup) {
            // we only override the check property, if specified by the parent RadioGroup
            if (radioGroup.checked && value) {
                checked = radioGroup.checked == value;
           }
            // we only override the onChange handler if we are nested in a RadioGroup
            if (radioGroup.onChange) {
                onChange = this.handleChange;
            }

            name = radioGroup.name;
        }

        return (
            <div className={className} title={title}>
                <input type="radio" id={this.id} ref={this.handleRef} name={name}
                       value={value} checked={checked} onChange={onChange} {...inputProps} />
                <label htmlFor={this.id}>
                    {children}
                </label>
            </div>
        )
    }
}