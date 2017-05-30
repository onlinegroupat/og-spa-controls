export declare class ClassList {
    classList: string[];
    constructor(...classNames: string[]);
    add(className: string): void;
    toString(): string;
    static compute(...classNames: string[]): string;
}
