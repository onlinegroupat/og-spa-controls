import * as ReactDOM from "react-dom";
import * as React from "react";
import {TextInput} from "../main/typescript/TextInput";

// require style
require("./style.less");

//
// Create react root
//
let root = document.createElement('div');
root.id = 'root';
document.body.appendChild(root);

//
//
//
let examples = (
    <div>
        <h1>input</h1>
        <p>This is the example section for input controls</p>
        <TextInput className="example-text-input" label="Input1" />
    </div>
);


//
// Render examples
//
ReactDOM.render( examples, root );
