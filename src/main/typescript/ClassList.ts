export class ClassList {
    classList:string[];

    constructor(...classNames:string[]) {
        this.classList = [];
        if (classNames) {
            for (let className of classNames) {
                if (className) {
                    this.classList.push(...className.split(' '));
                }
            }
        }
    }

    public add(className:string) {
        this.classList.push(className);
    }

    public toString():string {
        return this.classList.join(' ');
    }


    public static compute(...classNames:string[]):string {
        return new ClassList(...classNames).toString();
    }
}

