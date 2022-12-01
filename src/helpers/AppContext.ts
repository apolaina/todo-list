import { createContext } from 'react';

interface ContextProps {
    removeTodo: (id: string) => void;
    updateTodo: (id: string) => void;
    onToggleFollow: () => void;
}

export const AppContext = createContext<ContextProps>({
    removeTodo: (id: string) => { },
    updateTodo: (id: string) => { },
    onToggleFollow: () => { },
});
