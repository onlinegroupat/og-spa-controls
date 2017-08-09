import * as React from "react";

export const Spinner = (props:React.HTMLAttributes<HTMLDivElement>) => (
    <div {...props}>
        <svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="5" strokeMiterlimit="10" />
        </svg>
    </div>
);