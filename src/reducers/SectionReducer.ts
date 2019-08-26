import {ITodoStore} from "../store";
import {ITodoActions} from "../actions";

const initialState: ITodoStore = {
    sections: []
};

export function sectionReducer(state = initialState, action: ITodoActions): ITodoStore {
    switch (action.type) {
        case 'ADD_TODO':
            return {sections: [...state.sections, action.payload]};
        default:
            return state;
    }
}