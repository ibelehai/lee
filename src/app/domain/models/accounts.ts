export interface IAccount {
    id: number;
    type: number;
    name: string;
    image: string;
}

export class Account implements IAccount {
    public id: number;
    public type: number;
    public name: string;
    public image: string;

    constructor(id: number, type: number, name: string, image: string) {
        this.id = id;
        this.type = type;
        this.name = name;
        this.image = image;
    }
}
