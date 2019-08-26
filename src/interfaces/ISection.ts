import {IToDo} from "./IToDo";

export interface ISection {
    name: string;
    todos: Array<IToDo>;
    id: number;
}