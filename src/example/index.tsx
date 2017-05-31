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
//
//
let examples = (
    <div>
        <Example>
            <form>
            <h1>input</h1>
                <TextInput className="example-text-input" label="Default style" />
                <TextInput className="example-text-input-custom" label="Custom focus color" />
                <TextInput className="example-text-input" label="Requires value" required />
                <TextInput className="example-text-input" label="Requires pattern '1234'" pattern="1234" />
                <TextInput className="example-text-input" label="Type email" type="email" />
                <TextInput className="example-text-input" label="Type number" type="number" />
                <TextInput className="example-text-input" label="Min length 2" minLength={2} />
                <Button className="example-button" primary icon={MaterialIcon.save}>Submit</Button>
            </form>

            <h1>icons</h1>
            <Icon>{MaterialIcon.link}</Icon>
            <Icon>{MaterialIcon.watch_later}</Icon>
            <Icon>{MaterialIcon.branding_watermark}</Icon>

            <h1>buttons</h1>
            <Button className="example-button">Normal button</Button>
            <Button className="example-button" primary>Primary button</Button>
            <Button className="example-button" icon={MaterialIcon.search}>Icon button</Button>
            <Button className="example-button" icon={MaterialIcon.search} primary>Primary Icon button</Button>
        </Example>
    </div>
);


//
// Render examples
//
ReactDOM.render( examples, root );
