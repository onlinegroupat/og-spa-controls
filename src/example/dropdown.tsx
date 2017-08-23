import * as React from "react";
import {Dropdown, DropdownPopup, DropdownToggle} from "../main/typescript/Dropdown";
import {Button} from "../main/typescript/Button";

export const DropdownSection = () => (
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
);