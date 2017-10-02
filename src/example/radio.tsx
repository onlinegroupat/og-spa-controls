import * as React from "react";
import {RadioButton, RadioGroup} from "../main/typescript/RadioButton";
import {Button} from "../main/typescript/Button";
import {MaterialIcon} from "../main/typescript/MaterialIcon";

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


export const RadioButtonSection = () => (
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
);

export const RadioGroupSection = () => (
    <section>
        <h2>radio group</h2>
        <form>
            <RadioGroup className="example-radio-group" label="Default radio group">
                <RadioButton className="example-radio-button" value="1">one</RadioButton>
                <RadioButton className="example-radio-button" value="2">two</RadioButton>
            </RadioGroup>
            <RadioGroup className="example-checkbox-group" label="Radio group with event handler (console!)"
                        onChange={e => console.log(`${e.target.name} changed to ${e.target.checked}`)}>
                <RadioButton className="example-radio-button" value="1">one</RadioButton>
                <RadioButton className="example-radio-button" value="2">two</RadioButton>
                <RadioButton className="example-radio-button" value="3" disabled>disabled</RadioButton>
            </RadioGroup>
            <ControlledRadioGroupExample/>
            <Button className="example-button" primary icon={MaterialIcon.save}>Submit</Button>
        </form>
    </section>
);