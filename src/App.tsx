import { AppContext } from './helpers/AppContext';
import { EntityTypeEnum, isConfirmAlertConfirmed } from './helpers/ConfirmAlert';
import { firebaseApp, FirebaseContext } from './helpers/FirebaseContext';
import { initialTodos } from './helpers/initialTodos';
import { Todo } from './models/Todo';
import { Dictionary } from './models/Dictionary';
import { LocalStorageKeys } from './models/LocalStorageKeys';
import { useLocalStorage } from './hooks/useLocalStorage';

import AddContainer from './components/molecules/Form/FormContainer/FormContainer';
import ConfirmButton from './components/atoms/Button/ConfirmButton/ConfirmButton';
import Content from './components/organisms/Content/Content';
import Header from './components/organisms/Header/Header';
import List from './components/molecules/List/List';
import Title from './components/atoms/Title/Title';

import './App.css';

const App: React.FC = () => {
    const [todos, setTodos] = useLocalStorage(LocalStorageKeys.Todos, initialTodos);

    const removeTodo = (id: string) => {
        const isConfirmed = isConfirmAlertConfirmed(EntityTypeEnum.List, todos[id].title);

        if (isConfirmed) {
            const { [id]: todo, ...restOfTodos }: Dictionary<Todo> = todos;
            setTodos(restOfTodos);
        }
    };

    const updateTodo = (updatedTodo: Todo) => {
        setTodos((previousState: Dictionary<Todo>) => {
            const { id, ...restOfTodo }: Todo = updatedTodo;
            return {
                ...previousState,
                [updatedTodo.id as string]: restOfTodo,
            };
        });
    };

    return (
        <FirebaseContext.Provider value={firebaseApp}>
            <AppContext.Provider value={{ removeTodo, updateTodo }}>
                <Header>
                    <Title title="Tableau principal" />
                    <ConfirmButton title="Initialiser le jeu de données" className="ml-5" onClick={() => setTodos(initialTodos)} />
                </Header>

                <Content>
                    {Object.keys(todos).map((key: string) => (
                        <List key={key} todo={{ id: key, ...todos[key] }} />
                    ))}

                    <div className="w-68 mx-1">
                        <AddContainer title="Ajouter une autre liste" />
                    </div>
                </Content>
            </AppContext.Provider>
        </FirebaseContext.Provider>
    );
};

export default App;
