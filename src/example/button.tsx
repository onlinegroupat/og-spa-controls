import * as React from "react";
import {Button, ButtonGroup} from "../main/typescript/Button";
import {MaterialIcon} from "../main/typescript/MaterialIcon";

export const ButtonSection = (props:{}) => (
    <section>
        <h2>buttons</h2>
        <div>
            <Button className="example-button">Normal button</Button>
            <Button className="example-button" disabled>Disabled button</Button>
            <Button className="example-button" primary>Primary button</Button>
            <Button className="example-button" secondary>Secondary button</Button>
        </div>
        <div>
            <Button className="example-button" primary danger>Primary danger</Button>
            <Button className="example-button" danger>Danger</Button>
            <Button className="example-button" secondary danger>Secondary danger</Button>
        </div>
        <div>
            <Button className="example-button" icon={MaterialIcon.search}>Icon button</Button>
            <Button className="example-button" icon={MaterialIcon.search} primary>Primary Icon button</Button>
            <Button className="example-button" icon={MaterialIcon.search} secondary>Secondary Icon button</Button>
            <Button className="example-button" icon={MaterialIcon.warning} danger>Danger Icon button</Button>
            <Button className="example-button" icon={MaterialIcon.warning} primary danger>Primary danger Icon button</Button>
        </div>
        <div>
            <ButtonGroup className="example-button-group">
                <Button className="example-button" primary>Primary button</Button>
                <Button className="example-button" icon={MaterialIcon.search}>Icon button</Button>
                <Button className="example-button" icon={MaterialIcon.search}>Icon button</Button>
                <Button className="example-button" icon={MaterialIcon.search}>Icon button</Button>
                <Button className="example-button" icon={MaterialIcon.search}>Icon button</Button>
                <Button className="example-button" icon={MaterialIcon.search} primary>Primary Icon button</Button>
            </ButtonGroup>
        </div>
    </section>
);