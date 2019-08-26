import {IUser} from "./IUser";

export interface IToDo {
    name: string;
    due: string;
    status: string;
    owner: IUser;
    id: number;
}