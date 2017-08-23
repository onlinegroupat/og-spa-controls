import * as ReactDOM from "react-dom";
import * as React from "react";
import {Button, TextAreaInput, TextInput} from "../main/typescript/index";
import {SelectField, SelectFieldProps} from "../main/typescript/SelectField";
import {Checkbox, CheckboxProps} from "../main/typescript/Checkbox";
import {ButtonProps} from "../main/typescript/Button";
import {TextInputProps} from "../main/typescript/TextInput";
import {TextAreaInputProps} from "../main/typescript/TextAreaInput";
import {DropdownSection} from "./dropdown";
import {ButtonSection} from "./button";
import {ProgressSection} from "./progress";
import {RadioButtonSection, RadioGroupSection} from "./radio";
import {IconSection} from "./icon";
import {CheckboxGroupSection, CheckboxSection} from "./checkbox";
import {SelectSection} from "./select";
import {TextAreaSection} from "./textarea";
import {InputSection} from "./input";
import {DataTableSection} from "./datatable";

// require style
require("./index.less");

//
// Create react root
//
let root = document.createElement('div');
root.id = 'root';
document.body.appendChild(root);


//
// Just a check if our components are customizeable like that
//
let MyCheckbox = (props: CheckboxProps) => <Checkbox className="example-checkbox" {...props} />;
let MyButton = (props: ButtonProps) => <Button className="example-button" {...props} />;
let MyTextInput = (props: TextInputProps) => <TextInput className="example-text-input" {...props} />;
let MyTextAreaInput = (props: TextAreaInputProps) => <TextAreaInput className="example-text-input" {...props} />;
let MySelectField = (props: SelectFieldProps) => <SelectField className="example-text-input" {...props} />;

//
// Our examples
//
let examples = (
    <article>
        <h1>og-spa-controls examples</h1>
        <p>This are examples showing the og-spa-controls in action. It is also very helpful to leave this page running
            during development.</p>
        <InputSection/>
        <TextAreaSection/>
        <SelectSection/>
        <CheckboxSection/>
        <CheckboxGroupSection/>
        <RadioButtonSection/>
        <RadioGroupSection/>
        <DataTableSection/>
        <IconSection/>
        <ButtonSection/>
        <DropdownSection />
        <ProgressSection/>
    </article>
);

//
// Render examples
//
ReactDOM.render(examples, root);
