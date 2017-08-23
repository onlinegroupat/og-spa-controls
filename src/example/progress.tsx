import * as React from "react";
import {Spinner} from "../main/typescript/Spinner";
import {Bouncer} from "../main/typescript/Bouncer";

export const ProgressSection = () => (
    <section>
        <h2>progress</h2>
        <p>
            Bouncer: <Bouncer className="example-bouncer"></Bouncer>
            Spinner: <Spinner className="example-spinner"></Spinner>
        </p>
        <p>
            spinner colors:
            <Spinner className="example-spinner" style={{ color:"red" }}></Spinner>
            <Spinner className="example-spinner" style={{ color:"blue" }}></Spinner>
            <Spinner className="example-spinner" style={{ color:"green" }}></Spinner>
        </p>
    </section>
);