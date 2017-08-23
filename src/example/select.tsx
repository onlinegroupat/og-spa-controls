import * as React from "react";
import {SelectField} from "../main/typescript/SelectField";
import {Button} from "../main/typescript/Button";
import {MaterialIcon} from "../main/typescript/MaterialIcon";

export const SelectSection = () => (
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
);