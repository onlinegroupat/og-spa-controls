import * as ReactDOM from "react-dom";
import * as React from "react";
import {Button, Icon, MaterialIcon, TextAreaInput, TextInput} from "../main/typescript/index";
import {SelectField, SelectFieldProps} from "../main/typescript/SelectField";
import {Checkbox, CheckboxGroup, CheckboxProps} from "../main/typescript/Checkbox";
import {ButtonProps} from "../main/typescript/Button";
import {TextInputProps} from "../main/typescript/TextInput";
import {TextAreaInputProps} from "../main/typescript/TextAreaInput";
import {Dropdown, DropdownToggle, DropdownPopup} from "../main/typescript/Dropdown";
import {DateInput} from "../main/typescript/DateInput";
import * as moment from "moment";
import {RadioButton, RadioGroup} from "../main/typescript/RadioButton";

// require style
require("./index.less");

//
// Create react root
//
let root = document.createElement('div');
root.id = 'root';
document.body.appendChild(root);

let Example = (props: { children: React.ReactNode }) => <div className="example">{props.children}</div>;

//
// Example showing a controlled input
//
class ControlledInputExample extends React.Component<{}, { value: string }> {
    constructor(props: undefined) {
        super(props);
        this.state = {value: 'initialValue'};
    }

    private handleChange = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({value: e.target.value});

    render() {
        return (
            <div>
                <TextInput className="example-text-input" label="Controlled input" value={this.state.value}
                           onChange={this.handleChange}/>
                <p>The current value is {this.state.value}</p>
            </div>
        );
    }
}

//
// Example showing a controlled input
//
class ControlledDateInputExample extends React.Component<{}, { value: moment.Moment | null, stringValue?: string }> {
    constructor(props: undefined) {
        super(props);
        this.state = {value: moment()};
    }

    private handleChange = (newValue: moment.Moment) => this.setState({value: newValue});
    private handleStringChange = (newValue: moment.Moment) => this.setState({stringValue: newValue.isValid() ? newValue.format('DD.MM.YYYY') : ''});
    render() {
        console.log('ControlledDateInputExample.render: value = ', this.state.value);

        return (
            <div>
                <div>
                    <DateInput className="example-text-input" label="stored as moment object"
                               dateValue={this.state.value}
                               format="DD.MM.YYYY"
                               acceptFormat="D.M.YYYY"
                               onDateChange={this.handleChange}/>
                    <Button onClick={e => this.setState({value: null})}>Reset</Button>
                    <span>The current value is {this.state.value ? this.state.value.format() : 'null'}</span>
                </div>
                <div>
                    <DateInput className="example-text-input" label="stored as string"
                               dateValue={this.state.stringValue ? moment(this.state.stringValue, 'DD.MM.YYYY', true) : null}
                               format="DD.MM.YYYY"
                               acceptFormat="D.M.YYYY"
                               onDateChange={this.handleStringChange}/>
                    <Button onClick={e => this.setState({stringValue: ''})}>Reset</Button>
                    <span>The current value is {this.state.stringValue || ''}</span>
                </div>
            </div>
        );
    }
}

//
// Example showing a controlled input
//
class ControlledTextAreaExample extends React.Component<{}, { value: string }> {
    constructor(props: undefined) {
        super(props);
        this.state = {value: 'initialValue'};
    }

    private handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => this.setState({value: e.target.value});

    render() {
        return (
            <div>
                <TextAreaInput className="example-text-input" label="Controlled textarea" value={this.state.value}
                               onChange={this.handleChange}/>
                <p>The current value is {this.state.value}</p>
            </div>
        );
    }
}


class ControlledCheckboxGroupExample extends React.Component<{}, { checked: string[] }> {
    constructor(props: undefined) {
        super(props);
        this.state = {checked: ['1']};
    }

    private handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let checked = new Set(this.state.checked);
        console.log(e.target);
        console.log(e.target.checked);
        if (e.target.checked) {
            checked.add(e.target.value);
            console.log(`ControlledCheckboxGroupExample.handleChange: adding ${e.target.value}`);
        }
        else {
            checked.delete(e.target.value);
            console.log(`ControlledCheckboxGroupExample.handleChange: removing ${e.target.value}`);
        }
        this.setState({checked: Array.from(checked)});
    };

    render() {
        console.log('ControlledCheckboxGroupExample.render: checked', this.state.checked);
        return (
            <div>
                <CheckboxGroup className="example-checkbox-group" label="Checkbox group with event handler (console!)"
                               checked={this.state.checked}
                               onChange={this.handleChange}>
                    <Checkbox className="example-checkbox" value="1">one</Checkbox>
                    <Checkbox className="example-checkbox" value="2">two</Checkbox>
                </CheckboxGroup>
                <p>Currently checked are: { this.state.checked.join(', ') }</p>
            </div>
        )
    }
}

class ControlledRadioGroupExample extends React.Component<{}, { checked: string }> {
    constructor(props: undefined) {
        super(props);
        this.state = {checked: '1'};
    }

    private handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            this.setState({checked: e.target.value});
            console.log(`ControlledCheckboxGroupExample.handleChange: adding ${e.target.value}`);
        }
    };

    render() {
        console.log('ControlledCheckboxGroupExample.render: checked', this.state.checked);
        return (
            <div>
                <RadioGroup className="example-radio-group" label="Controlled radio group"
                               checked={this.state.checked}
                               onChange={this.handleChange}>
                    <RadioButton className="example-radio-button" value="1">one</RadioButton>
                    <RadioButton className="example-radio-button" value="2">two</RadioButton>
                </RadioGroup>
                <p>Currently checked are: { this.state.checked }</p>
            </div>
        )
    }
}

let MyCheckbox = (props: CheckboxProps) => <Checkbox className="example-checkbox" {...props} />;
let MyButton = (props: ButtonProps) => <Button className="example-button" {...props} />;
let MyTextInput = (props: TextInputProps) => <TextInput className="example-text-input" {...props} />;
let MyTextAreaInput = (props: TextAreaInputProps) => <TextAreaInput className="example-text-input" {...props} />;
let MySelectField = (props: SelectFieldProps) => <SelectField className="example-text-input" {...props} />;

//
//
//
let examples = (
    <article>
        <h1>og-spa-controls examples</h1>
        <p>This are examples showing the og-spa-controls in action. It is also very helpful to leave this page running
            during development.</p>
        <section>
            <h2>input</h2>
            <form>
                <TextInput className="example-text-input" label="Default style"/>
                <TextInput className="example-text-input-custom" label="Custom focus color"/>
                <TextInput className="example-text-input" label="Requires value" required/>
                <TextInput className="example-text-input" label="Requires pattern '1234'" pattern="1234"/>
                <TextInput className="example-text-input" label="Type email" type="email"/>
                <TextInput className="example-text-input" label="Type number" type="number"/>
                <TextInput className="example-text-input" label="Min length 2" minLength={2}/>
                <ControlledInputExample />
                <ControlledDateInputExample />
                <Button className="example-button" primary icon={MaterialIcon.save}>Submit</Button>
            </form>
        </section>
        <section>
            <h2>textarea</h2>
            <form>
                <TextAreaInput className="example-text-input" label="Default style"/>
                <TextAreaInput className="example-text-input-custom" label="Custom focus color"/>
                <TextAreaInput className="example-text-input" label="Requires value" required/>
                <TextAreaInput className="example-text-input" label="With rows=1" rows={1}/>
                <ControlledTextAreaExample />
                <Button className="example-button" primary icon={MaterialIcon.save}>Submit</Button>
            </form>
        </section>
        <section>
            <h2>select</h2>
            <form>
                <SelectField className="example-text-input" label="Default style">
                    <option value="value1">Value1</option>
                    <option value="value2">Value2</option>
                    <option value="value3">Value3</option>
                </SelectField>
                <SelectField className="example-text-input" label="Empty option">
                    <option value=""></option>
                    <option value="value1">Value1</option>
                    <option value="value2">Value2</option>
                    <option value="value3">Value3</option>
                </SelectField>
                <SelectField className="example-text-input" label="Required" required>
                    <option value=""></option>
                    <option value="value1">Value1</option>
                    <option value="value2">Value2</option>
                    <option value="value3">Value3</option>
                </SelectField>
                <Button className="example-button" primary icon={MaterialIcon.save}>Submit</Button>
            </form>
        </section>
        <section>
            <h2>checkbox</h2>
            <form>
                <Checkbox className="example-checkbox">Default style</Checkbox>
                <Checkbox className="example-checkbox" checked>Checked</Checkbox>
                <Checkbox className="example-checkbox" checked>
                    Checkbox with a very long label that includes<br/>
                    line breaks and
                    <small>some styling</small>
                    <br/>
                    <strong>Yeah!</strong>
                </Checkbox>
                <Button className="example-button" primary icon={MaterialIcon.save}>Submit</Button>
            </form>
        </section>
        <section>
            <h2>checkbox group</h2>
            <form>
                <CheckboxGroup className="example-checkbox-group" label="Default checkbox group">
                    <Checkbox className="example-checkbox" value="1">one</Checkbox>
                    <Checkbox className="example-checkbox" value="2">two</Checkbox>
                </CheckboxGroup>
                <CheckboxGroup className="example-checkbox-group" label="Checkbox group with event handler (console!)"
                               onChange={e => console.log(`${e.target.name} changed to ${e.target.checked}`)}>
                    <Checkbox className="example-checkbox" value="1">one</Checkbox>
                    <Checkbox className="example-checkbox" value="2">two</Checkbox>
                    <Checkbox className="example-checkbox" value="3" disabled>disabled</Checkbox>
                </CheckboxGroup>
                <ControlledCheckboxGroupExample/>
                <Button className="example-button" primary icon={MaterialIcon.save}>Submit</Button>
            </form>
        </section>
        <section>
            <h2>radio button</h2>
            <form>
                <RadioButton className="example-radio-button">Default style</RadioButton>
                <RadioButton className="example-radio-button" checked>Checked</RadioButton>
                <RadioButton className="example-radio-button" checked>
                    Checkbox with a very long label that includes<br/>
                    line breaks and
                    <small>some styling</small>
                    <br/>
                    <strong>Yeah!</strong>
                </RadioButton>
                <Button className="example-button" primary icon={MaterialIcon.save}>Submit</Button>
            </form>
        </section>
        <section>
            <h2>radio group</h2>
            <form>
                <RadioGroup className="example-radio-group" label="Default radio group">
                    <RadioButton className="example-radio-button" value="1">one</RadioButton>
                    <RadioButton className="example-radio-button" value="2">two</RadioButton>
                </RadioGroup>
                <RadioGroup className="example-checkbox-group" label="Radio group with event handler (console!)"
                               onChange={e => console.log(`${e.target.name} changed to ${e.target.checked}`)}>
                    <RadioButton className="example-radio-group" value="1">one</RadioButton>
                    <RadioButton className="example-radio-group" value="2">two</RadioButton>
                    <RadioButton className="example-radio-group" value="3" disabled>disabled</RadioButton>
                </RadioGroup>
                <ControlledRadioGroupExample/>
                <Button className="example-button" primary icon={MaterialIcon.save}>Submit</Button>
            </form>
        </section>
        <section>
            <h2>icons</h2>
            <Icon>{MaterialIcon.link}</Icon>
            <Icon>{MaterialIcon.watch_later}</Icon>
            <Icon>{MaterialIcon.branding_watermark}</Icon>
        </section>
        <section>
            <h2>buttons</h2>
            <Button className="example-button">Normal button</Button>
            <Button className="example-button" disabled>Disabled button</Button>
            <Button className="example-button" primary>Primary button</Button>
            <Button className="example-button" icon={MaterialIcon.search}>Icon button</Button>
            <Button className="example-button" icon={MaterialIcon.search} primary>Primary Icon button</Button>
        </section>
        <section>
            <h2>dropdown</h2>
            <Dropdown className="example-dropdown">
                <DropdownToggle>
                    <Button className="example-button">Toggle dropdown</Button>
                </DropdownToggle>
                <DropdownPopup>
                    <Button className="example-button">Item 1</Button>
                    <Button className="example-button">Item 2</Button>
                    <Button className="example-button">Item 3</Button>
                </DropdownPopup>
            </Dropdown>
        </section>
    </article>
);


//
// Render examples
//
ReactDOM.render(examples, root);
