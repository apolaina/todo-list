import { v4 as uuidv4 } from 'uuid';
import { Dictionary } from '../models/Dictionary';
import { Todo } from '../models/Todo';

export const initialTodos: Dictionary<Todo> = {
    [uuidv4()]: {
        title: 'My first list',
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