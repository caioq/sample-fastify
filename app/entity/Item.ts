export default class Item {
    id: number;
    name: string;

    constructor (id: number, name: string) {
        this.id = Number(id);
        this.name = name;
    }
}