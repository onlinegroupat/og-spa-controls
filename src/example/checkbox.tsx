import * as React from "react";
import {Checkbox, CheckboxGroup} from "../main/typescript/Checkbox";
import {Button} from "../main/typescript/Button";
import {MaterialIcon} from "../main/typescript/MaterialIcon";

class ControlledCheckboxGroupExample extends React.Component<{}, { checked: string[] }> {
    constructor(props: {}) {
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


export const CheckboxSection = () => (
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
);

export const CheckboxGroupSection = () => (
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
);