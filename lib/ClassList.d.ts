export declare type ClassNameType = string | undefined;
export declare class ClassList {
    classList: string[];
    constructor(...classNames: ClassNameType[]);
    add(className: string): void;
    toString(): string;
    static compute(...classNames: ClassNameType[]): string;
}
