import { createContext } from 'react';
import { Todo } from '../models/Todo';

type ContextProps = {
    removeTodo: (id: string) => void;
    updateTodo: (updatedTodo: Todo) => void;
}

export const AppContext = createContext<ContextProps>({
    removeTodo: (id: string) => { },
    updateTodo: (updatedTodo: Todo) => { },
});
