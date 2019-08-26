import {ISection} from "../interfaces/ISection";
import {IToDo} from "../interfaces/IToDo";

export class Section implements ISection {
    constructor(public name: string, public todos: Array<IToDo>, public id: number = 0) {}
}