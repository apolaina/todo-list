import { AppContext } from './helpers/AppContext';
import { firebaseApp, FirebaseContext } from './helpers/FirebaseContext';
import { initialTodos } from './helpers/initialTodos';
import { LocalStorageKeys } from './models/LocalStorageKeys';
import { useLocalStorage } from './hooks/useLocalStorage';

import AddListButton from './components/atoms/Button/AddListButton/AddListButton';
import Content from './components/organisms/Content/Content';
import Header from './components/molecules/Header/Header';
import InitButton from './components/atoms/Button/InitButton/InitButton';
import List from './components/molecules/List/List';
import Title from './components/atoms/Title/Title';

import './App.css';

const App: React.FC = () => {
    const [todos, setTodos] = useLocalStorage(LocalStorageKeys.Todos, initialTodos);

    const removeTodo = (id: string) => {
        const isConfirm = window.confirm(
            `Vous allez supprimer la liste nommée ${todos[id].title}.\nAppuyer sur "OK" pour continuer.\nOu sur "Annuler" pour fermer.`
        );

        if (isConfirm) {
            const { [id]: todo, ...restOfTodos } = todos;
            setTodos(restOfTodos);
        }
    };

    const updateTodo = () => {};

    const onToggleFollow = () => {};

    return (
        <FirebaseContext.Provider value={firebaseApp}>
            <AppContext.Provider value={{ removeTodo, updateTodo, onToggleFollow }}>
                <Header>
                    <Title title="Tableau principal" />
                    <InitButton title="Initialiser le jeu de données" onClick={() => setTodos(initialTodos)} />
                </Header>

                <Content>
                    {Object.keys(todos).map((key: string) => (
                        <List key={key} todo={{ id: key, ...todos[key] }} />
                    ))}

                    <AddListButton title="Ajouter une autre liste" type="submit" />
                </Content>
            </AppContext.Provider>
        </FirebaseContext.Provider>
    );
};

export default App;
