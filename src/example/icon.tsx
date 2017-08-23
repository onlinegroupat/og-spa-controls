import * as React from "react";
import {MaterialIcon} from "../main/typescript/MaterialIcon";
import {Icon} from "../main/typescript/Icon";

export const IconSection = (props:{}) => (
    <section>
        <h2>icons</h2>
        <Icon>{MaterialIcon.link}</Icon>
        <Icon>{MaterialIcon.watch_later}</Icon>
        <Icon>{MaterialIcon.branding_watermark}</Icon>
    </section>
);