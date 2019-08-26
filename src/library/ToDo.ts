import {IToDo} from "../interfaces/IToDo";
import {IUser} from "../interfaces/IUser";

export class ToDo implements IToDo {
    constructor(
        public name: string,
        public due: string,
        public status: string,
        public owner: IUser,
        public id: number = 0
    ) {}
}