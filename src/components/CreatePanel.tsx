import React, {ChangeEvent, FormEvent} from 'react';
import ReactModal from "react-modal";
import {ISection} from "../interfaces/ISection";
import {IToDo} from "../interfaces/IToDo";
import {ToDo} from "../library/ToDo";
import {User} from "../library/User";

/**
 * Contract for props
 */
interface IProp {
    modalIsOpen: boolean,
    onClick: Function,
    onSubmit: Function,
    sections: Array<ISection>
}

/**
 * Contract for state
 */
interface IState {
    name: string,
    due: string,
    sectionId: number,
    value: string
}

/**
 * Custom modal styles
 */
const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

/**
 * Style contract
 */
interface Style {
    color: string
}

/**
 * Subtitle style
 */
interface Subtitle {
    style: Style,
}

/**
 * CreatePanel functional component
 */
export class CreatePanel extends React.Component<IProp, IState, Subtitle> {
    props: IProp;
    state: IState;
    subtitle: Subtitle | null;

    /**
     * Constructor
     *
     * @param props
     * @param state
     * @param subtitle
     */
    constructor(props: IProp, state: IState, subtitle: Subtitle) {
        super(props);
        this.props = props;
        this.state = state;
        this.subtitle = subtitle;

        if (!!this.props.sections[0].id) {
            this.setState({'sectionId': this.props.sections[0].id});
        }

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSectionChange = this.handleSectionChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    /**
     * Action after opening modal
     */
    afterOpenModal() {
        // references are now sync'd and can be accessed.
        //this.subtitle.style.color = '#f00';
    }

    /**
     * Handle changing name
     *
     * @param event
     */
    handleNameChange(event: ChangeEvent) {
        // @ts-ignore
        this.setState({name: event.target.value});
    }

    /**
     * Handle date change
     *
     * @param event
     */
    handleDateChange(event: ChangeEvent) {
        // @ts-ignore
        this.setState({due: event.target.value})
    }

    /**
     * Handle changing section
     *
     * @param event
     */
    handleSectionChange(event: ChangeEvent) {
        // @ts-ignore
        this.setState({sectionId: event.target.value})
    }

    /**
     * On submit add a new todo item
     * @param event
     */
    onSubmit(event: FormEvent) {
        event.preventDefault();
        let todo: IToDo = new ToDo(
            this.state.name,
            this.state.due,
            'Active',
            new User('Ashwin', 1),
            Math.floor(Math.random() * (+200- +10)) + +10
        );

        this.props.onSubmit(todo, this.state.sectionId);
        this.props.onClick();
    }

    /**
     * Render the modal and sections
     */
    render() {
        let showItems = this.props.sections.map((section: ISection) => {
            return (<option value={section.id} key={section.id}>{section.name}</option>)
        });

        return (
            <div>
                <ReactModal
                    isOpen={this.props.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={() => this.props.onClick()}
                    style={customStyles}
                    contentLabel="Example Modal"
                >

                    <h2 ref="subtitle">Add Task</h2>
                    <button id="close-modal" onClick={() => this.props.onClick()}>close</button>
                    <br />

                    <form onSubmit={this.onSubmit}>
                        <input type="text" id="name" value={this.state.name} onChange={this.handleNameChange} />

                        <select id="sections" value={this.state.sectionId} onChange={this.handleSectionChange}>
                            {showItems}
                        </select>

                        <input type="date" id="due" value={this.state.due} onChange={this.handleDateChange} />
                        <hr />
                        <input type="submit" id="submit" value="Submit" />
                    </form>
                </ReactModal>
            </div>
        );
    }
}
