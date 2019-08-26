import React from 'react';
import {CreatePanel} from "./CreatePanel"
import {ISection} from "../interfaces/ISection";
import {IToDo} from "../interfaces/IToDo";

/**
 * State Interface
 */
interface IState {
    modelIsOpen: boolean,
}

/**
 * Property Interface
 */
interface IProp {
    sections: Array<ISection>
    onSubmit: Function
}

/**
 * Control component containing state and props for the control UI element
 */
export default class Controls extends React.Component<IProp, IState> {
    state: IState;

    /**
     * Constructor
     *
     * @param props
     * @param state
     */
    constructor(props: IProp, state: IState) {
        super(props);
        this.state = state
    }

    /**
     * Handle opening the modal
     */
    handleClick() {
        this.setState({modelIsOpen: !this.state.modelIsOpen});
    }

    /**
     * Rendering the controls with create panel
     */
    render () {
        return (
            <div className="controls">
                <CreatePanel
                    modalIsOpen={this.state.modelIsOpen}
                    sections={this.props.sections}
                    onClick={() => this.handleClick()}
                    onSubmit={(todo: IToDo, sectionId: number) => this.props.onSubmit(todo, sectionId)}
                />

                <button onClick={() => this.handleClick()}>Add Tasks</button>

                <span id="trash" className="glyphicon glyphicon-trash"></span>
                <span id="date">Due</span>
                <span id="state">Status</span>
                <span id="user">User</span>
            </div>
        );
    }
}