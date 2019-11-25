export interface ITag {
    id   : number;
    label: string;
}

export class Tag implements ITag {
    public id   : number;
    public label: string;

    constructor(id: number, label: string) {
        this.id    = id;
        this.label = label;
    }
}
