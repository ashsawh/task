import React from 'react';
import {IToDo} from "../interfaces/IToDo";

interface IProps {
    todo: IToDo,
    onDoubleClick: any,
    onClick: any
}

/**
 * TodoItem contains functional component logic to render passed down props
 *
 * @param prop
 * @constructor
 */
const ToDoItem: React.FC<IProps> = (prop) => {
    let icons = prop.todo.status === 'Completed' ? "glyphicon glyphicon-check" : "glyphicon glyphicon-unchecked";
    return (
        <div className="ToDoItem">
            <span id="state-icon" className={icons}></span>
            <span id="name" onDoubleClick={prop.onDoubleClick}>{prop.todo.name}</span>
            <span id="date">{prop.todo.due}</span>
            <span id="state" onClick={prop.onClick}>{prop.todo.status}</span>
            <span id="user">{prop.todo.owner.name}</span>
        </div>
    );
};

export default ToDoItem;
