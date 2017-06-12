import * as ReactDOM from "react-dom";
import * as React from "react";
import {Button, Icon, MaterialIcon, TextAreaInput, TextInput} from "../main/typescript/index";
import {SelectField, SelectFieldProps} from "../main/typescript/SelectField";
import {Checkbox, CheckboxGroup, CheckboxProps} from "../main/typescript/Checkbox";
import {ButtonProps} from "../main/typescript/Button";
import {TextInputProps} from "../main/typescript/TextInput";
import {TextAreaInputProps} from "../main/typescript/TextAreaInput";

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
                </CheckboxGroup>
                <ControlledCheckboxGroupExample/>
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
            <Button className="example-button" primary>Primary button</Button>
            <Button className="example-button" icon={MaterialIcon.search}>Icon button</Button>
            <Button className="example-button" icon={MaterialIcon.search} primary>Primary Icon button</Button>
        </section>
    </article>
);


//
// Render examples
//
ReactDOM.render(examples, root);
