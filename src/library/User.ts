import {IUser} from "../interfaces/IUser";

export class User implements IUser{
    constructor(public name: string, public id: number) {}
}