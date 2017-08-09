import * as React from "react";
import {ClassNameProps} from "./types";

export const Bouncer = (props:ClassNameProps) => (
    <div className={props.className}>
        <div className="container">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
        </div>
    </div>
);

