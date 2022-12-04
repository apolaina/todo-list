import { useContext } from 'react';
import { AppContext } from '../../../helpers/AppContext';
import { Todo } from '../../../models/Todo';
import Card from '../Card/Card';
import Cards from '../../organisms/Cards/Cards';
import FormContainer from '../Form/FormContainer/FormContainer';
import ListHeader from './ListHeader/ListHeader';
import ListFooter from './ListFooter/ListFooter';

type Props = {
    todo: Todo;
};

const List: React.FC<Props> = ({ todo }: Props) => {
    const { removeTodo } = useContext(AppContext);

    return (
        <div className="flex flex-col mx-1 w-68 bg-todo-grey-50 rounded-sm">
            <ListHeader title={todo.title} onButtonClick={() => removeTodo(todo.id!)} />

            <Cards>
                {Object.keys(todo.cards).map((keyCard: string) => {
                    const card = todo.cards[keyCard];
                    return <Card key={keyCard} card={{ id: keyCard, ...card }} todo={todo} />;
                })}
            </Cards>

            <ListFooter>
                <FormContainer title="Ajouter une autre carte" todo={todo} />
            </ListFooter>
        </div>
    );
};

export default List;
