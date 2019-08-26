import {ISection} from "./interfaces/ISection";

export interface ITodoActions {
    type: string,
    payload: ISection
}

export function addTodo (section: ISection): ITodoActions {
    return {
        type: "ADD_TODO",
        payload: section
    }
}

