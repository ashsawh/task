import {ISection} from "../interfaces/ISection";
import {Section} from "../library/Section";
import {ToDo} from "../library/ToDo";
import {IUser} from "../interfaces/IUser";
import {User} from "../library/User";

const ashwin: IUser = new User('Ashwin', 1);
const seema: IUser = new User('Seema', 2);

export const todos: Array<ISection> = [
    new Section('January', [
        new ToDo('Learn React', '10/01/2019', 'Active', ashwin, 1),
        new ToDo('Learn TypeScript', '10/01/2019', 'Active', ashwin, 2),
        new ToDo('Learn System Design', '10/01/2019', 'Completed', ashwin, 3),
        new ToDo('Learn Kubernetes', '10/01/2019', 'Completed', seema,4),
        new ToDo('Learn Algorithms', '10/01/2019', 'Completed', ashwin, 5)
    ], 1),
    new Section('February', [
        new ToDo('Use Hackerrank', '11/01/2019', 'Active', ashwin, 6),
        new ToDo('Use whiteboard', '11/01/2019', 'Active', seema, 7),
        new ToDo('Use LinkedIn', '11/01/2019', 'Completed', seema, 8)
    ], 2)
];

