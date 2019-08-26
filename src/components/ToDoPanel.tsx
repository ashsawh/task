import React from 'react';
import {ISection} from "../interfaces/ISection";
import ToDoItem from "./ToDoItem";

interface IProps {
    section: ISection,
    onDoubleClick: Function
    onClick: Function
}

/**
 * TodoPanel is a component that is charged with rendering the each panel and then creating items
 */
export default class ToDoPanel extends React.Component<IProps> {
    props: IProps;

    constructor(props: IProps) {
        super(props);
        this.props = props;
    }

    render () {
        let showItems = this.props.section.todos.map((todo) => {
            return (<ToDoItem
                key={todo.id} todo={todo}
                onDoubleClick={() => this.props.onDoubleClick(todo.id)}
                onClick={() => this.props.onClick(todo.status, todo.id)}
            />)
        });

        return (
            <div className="section">
                <div className="section-header">{this.props.section.name}</div>
                <div className="section-panel">
                    {showItems}
                </div>
            </div>
        );
    }
}
