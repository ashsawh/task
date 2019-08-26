import {combineReducers } from 'redux'
import {sectionReducer} from "./SectionReducer";

const rootReducer = combineReducers({
    sections: sectionReducer
});

export type AppState = ReturnType<typeof rootReducer>