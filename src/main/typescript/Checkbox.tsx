import * as React from "react";
import * as uuid from "uuid";
import * as PropTypes from "prop-types";


export interface CheckboxGroupProps {
    className?: string;
    label?: string;
    checked?: string[];
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export interface CheckboxGroupState {
}

const CheckboxGroupContextTypes = {
    checkboxGroup: PropTypes.object
};

export class CheckboxGroup extends React.PureComponent<CheckboxGroupProps, CheckboxGroupState> {

    constructor(props?: CheckboxGroupProps) {
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

export interface CheckboxProps extends React.HTMLAttributes<HTMLInputElement> {
    className?: string;
    inputRef?: (input: HTMLInputElement) => void;
}

export interface CheckboxState {
}

export class Checkbox extends React.PureComponent<CheckboxProps, CheckboxState> {

    constructor(props?: CheckboxProps) {
        super(props);

        this.state = {};
    }

    static contextTypes = CheckboxGroupContextTypes;

    private id: string;
    private ref: HTMLInputElement;

    private handleRef = (ref: HTMLInputElement) => {
        this.ref = ref;
        this.props.inputRef && this.props.inputRef(ref);
    };

    private handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        // call change handler of parent CheckboxGroup
        this.context.checkboxGroup.onChange(e);
        // call handler that was set via props
        this.props.onChange && this.props.onChange(e);
    };

    componentWillMount() {
        this.id = this.props.id || uuid();
    }

    shouldComponentUpdate?(nextProps: Readonly<CheckboxProps>, nextState: Readonly<CheckboxState>, nextContext: any) {
        // poor man's fix to the problem, that context change is not considered in PureComponent's shouldComponentUpdate
        // see https://medium.com/@mweststrate/how-to-safely-use-react-context-b7e343eff076
        // in our case it is probably very much okay to handle it like this:
        if (nextContext.checkboxGroup && nextContext.checkboxGroup.checked) {
            return true;
        }
        // need this check because this method is declared optional
        else if (super.shouldComponentUpdate) {
            return super.shouldComponentUpdate && super.shouldComponentUpdate(nextProps, nextState, nextContext);
        }
        else {
            throw new TypeError('considered unreachable');
        }
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