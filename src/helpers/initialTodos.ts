import { v4 as uuidv4 } from 'uuid';
import { IDictionary } from '../models/IDictionary';
import { ITodo } from '../models/ITodo';

export const initialTodos: IDictionary<ITodo> = {
    [uuidv4()]: {
        title: 'My first card',
        cards: {
            [uuidv4()]: {
                title: 'My first card',
                isFollowed: false,
            },
            [uuidv4()]: {
                title: 'My second card',
                isFollowed: false,
            },
            [uuidv4()]: {
                title: 'Followed card',
                isFollowed: true,
            }
        }
    },
    [uuidv4()]: {
        title: 'My second list',
        cards: {
            [uuidv4()]: {
                title: 'Followed card with description',
                description: 'My first description',
                isFollowed: true,
            }
        }
    },
};