import * as React from "react";
import * as uuid from "uuid";
import * as PropTypes from "prop-types";


export interface CheckboxGroupProps {
    className?: string;
    label?: string;
    checked?: string[];
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const CheckboxGroupContextTypes = {
    checkboxGroup: PropTypes.object
};

export class CheckboxGroup extends React.PureComponent<CheckboxGroupProps> {

    constructor(props: CheckboxGroupProps) {
        super(props);

        this.state = {};
    }

    getChildContext() {
        return {
            checkboxGroup: {
                checked: this.props.checked,
                onChange: this.props.onChange
            }
        };
    }

    static childContextTypes = CheckboxGroupContextTypes;

    render() {
        return (
            <div className={this.props.className}>
                <label>
                    {this.props.label}
                </label>
                <div className="checkboxes">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    inputRef?: (input: HTMLInputElement) => void;
}

export class Checkbox extends React.Component<CheckboxProps> {

    constructor(props: CheckboxProps) {
        super(props);

        this.state = {};
    }

    static contextTypes = CheckboxGroupContextTypes;

    private id?: string;
    private ref?: HTMLInputElement;

    private handleRef = (ref: HTMLInputElement) => {
        this.ref = ref;
        this.props.inputRef && this.props.inputRef(ref);
    };

    private handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        // call change handler of parent CheckboxGroup
        if (this.context.checkboxGroup) {
            if (this.context.checkboxGroup.onChange) {
                this.context.checkboxGroup.onChange(e);
            }
        }
        // call handler that was set via props
        this.props.onChange && this.props.onChange(e);
    };

    componentWillMount() {
        this.id = this.props.id || uuid();
    }

    render() {
        let {className, children, value, checked, onChange, ...inputProps} = this.props;

        // handle a CheckboxGroup parent
        let checkboxGroup = this.context.checkboxGroup;
        if (checkboxGroup) {
            // we only override the check property, if specified by the parent CheckboxGroup
            if (checkboxGroup.checked && value) {
                checked = checkboxGroup.checked.indexOf(value) >= 0;
           }
            // we only override the onChange handler if we are nested in a CheckboxGroup
            if (checkboxGroup.onChange) {
                onChange = this.handleChange;
            }
        }

       return (
            <div className={className}>
                <input type="checkbox" id={this.id} ref={this.handleRef}
                       value={value} checked={checked} onChange={onChange} {...inputProps} />
                <label htmlFor={this.id}>
                    {children}
                </label>
            </div>
        )

    }
}