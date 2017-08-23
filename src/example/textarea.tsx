import * as React from "react";
import {TextAreaInput} from "../main/typescript/TextAreaInput";
import {Button} from "../main/typescript/Button";
import {MaterialIcon} from "../main/typescript/MaterialIcon";

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

export const TextAreaSection = () => (
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
);