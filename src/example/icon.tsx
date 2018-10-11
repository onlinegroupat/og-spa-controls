import * as React from "react";
import {MaterialIcon} from "../main/typescript/MaterialIcon";
import {Icon} from "../main/typescript/Icon";

export const IconSection = (props:{}) => (
    <section>
        <h2>icons</h2>
        <Icon children={MaterialIcon.link} />
        <Icon children={MaterialIcon.watch_later} />
        <Icon children={MaterialIcon.branding_watermark} />
    </section>
);