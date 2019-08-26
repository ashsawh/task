import React from 'react';
import Header from "./components/Header"
import './App.css';
import Controls from "./components/Controls";
import {todos} from "./stubs/sections";
import {ISection} from "./interfaces/ISection";
import {IEmptyObject} from "./interfaces/IEmptyObject";
import ToDoPanel from "./components/ToDoPanel";
import {IToDo} from "./interfaces/IToDo";

interface IState {
    sections: Array<ISection>
}

export default class App extends React.Component<IEmptyObject> {
    state: IState;

    constructor(props: IEmptyObject) {
        super(props);
        this.state = {
            sections: todos
        }
    }

    handleDoubleClick (id: number) {
        let remaining: any = this.state.sections.map((section: ISection) => {
            section.todos = section.todos.filter((todo: IToDo) => {
                return todo.id !== id;
            });
            return section;
        });
        this.setState({ sections: remaining });
    }

    handleSubmit(todo: IToDo, sectionId: number) {
        let sections: Array<ISection> = this.state.sections.map((section: ISection) => {
            if (section.id === Number(sectionId)) {
                section.todos.push(todo);
            }

            return section;
        });


        this.setState({sections: sections})
    }

    handleClick(status: string, todoId: number) {
        status = status === "Active" ? "Completed" : "Active";

        let updatedStatus: any = this.state.sections.map((section: ISection) => {
            section.todos = section.todos.map((todo: IToDo) => {
                if (todo.id === todoId) {
                    todo.status = status;
                }

                return todo;
            });

            return section;
        });

        this.setState({ sections: updatedStatus });
    }

    render () {
        let todoItems = this.state.sections.map((section) => {
            return (
                <ToDoPanel
                    key={section.id}
                    section={section}
                    onDoubleClick={(i: number) => this.handleDoubleClick(i)}
                    onClick={(status: string, todoId: number) => this.handleClick(status, todoId)}
                />
            );
        });

        return (
            <div className="App">
                <Header />
                <main>
                    <Controls
                        sections={this.state.sections}
                        onSubmit={(todo: IToDo, sectionId: number) => this.handleSubmit(todo, sectionId)}
                    />
                    {todoItems}
                </main>
            </div>
        );
    }
}
