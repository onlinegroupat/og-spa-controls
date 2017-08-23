import * as React from "react";
import {Button, ButtonGroup} from "../main/typescript/Button";
import {MaterialIcon} from "../main/typescript/MaterialIcon";

export const ButtonSection = (props:{}) => (
    <section>
        <h2>buttons</h2>
        <Button className="example-button">Normal button</Button>
        <Button className="example-button" disabled>Disabled button</Button>
        <Button className="example-button" primary>Primary button</Button>
        <Button className="example-button" icon={MaterialIcon.search}>Icon button</Button>
        <Button className="example-button" icon={MaterialIcon.search} primary>Primary Icon button</Button>
        <ButtonGroup className="example-button-group">
            <Button className="example-button" primary>Primary button</Button>
            <Button className="example-button" icon={MaterialIcon.search}>Icon button</Button>
            <Button className="example-button" icon={MaterialIcon.search}>Icon button</Button>
            <Button className="example-button" icon={MaterialIcon.search}>Icon button</Button>
            <Button className="example-button" icon={MaterialIcon.search}>Icon button</Button>
            <Button className="example-button" icon={MaterialIcon.search} primary>Primary Icon button</Button>
        </ButtonGroup>
    </section>
);