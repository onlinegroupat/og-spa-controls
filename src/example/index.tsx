import * as ReactDOM from "react-dom";
import * as React from "react";
import {TextInput} from "../main/typescript/TextInput";
import {MaterialIcon} from "../main/typescript/MaterialIcon";
import {Icon} from "../main/typescript/Icon";
import {Button} from "../main/typescript/Button";

// require style
require("./index.less");

//
// Create react root
//
let root = document.createElement('div');
root.id = 'root';
document.body.appendChild(root);

let Example = (props:{children:React.ReactNode}) => <div className="example">{props.children}</div>;
//
// Example showing a controlled input
//
class ControlledInputExample extends React.Component<undefined, { value: string }> {
    constructor(props:undefined) {
        super(props);
        this.state = { value: 'initialValue' };
    }
    private handleChange = (e:React.ChangeEvent<HTMLInputElement>) => this.setState({ value: e.target.value });
    render() {
        return (
            <div>
                <TextInput className="example-text-input" label="Controlled input" value={this.state.value} onChange={this.handleChange} />
                <p>The current value is {this.state.value}</p>
            </div>
        );
    }
}

//
//
//
let examples = (
    <article>
        <h1>og-spa-controls examples</h1>
        <p>This are examples showing the og-spa-controls in action. It is also very helpful to leave this page running during development.</p>
        <section>
            <h2>input</h2>
            <form>
                <TextInput className="example-text-input" label="Default style" />
                <TextInput className="example-text-input-custom" label="Custom focus color" />
                <TextInput className="example-text-input" label="Requires value" required />
                <TextInput className="example-text-input" label="Requires pattern '1234'" pattern="1234" />
                <TextInput className="example-text-input" label="Type email" type="email" />
                <TextInput className="example-text-input" label="Type number" type="number" />
                <TextInput className="example-text-input" label="Min length 2" minLength={2} />
                <ControlledInputExample />
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
ReactDOM.render( examples, root );
