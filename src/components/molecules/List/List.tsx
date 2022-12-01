import { useContext } from 'react';
import { AppContext } from '../../../helpers/AppContext';
import { ITodo } from '../../../models/ITodo';

import AddCardButton from '../../atoms/Button/AddCardButton/AddCardButton';
import Card from '../../atoms/Card/Card';
import Cards from '../Cards/Cards';
import FooterList from '../../atoms/List/FooterList/FooterList';
import HeaderList from '../../atoms/List/HeaderList/HeaderList';

interface Props {
    todo: ITodo;
}

const List: React.FC<Props> = ({ todo }: Props) => {
    const { removeTodo } = useContext(AppContext);

    return (
        <div className="flex flex-col mx-1 w-68 bg-todo-grey-50 rounded-sm">
            <HeaderList title={todo.title} onButtonClick={() => removeTodo(todo.id!)} />

            <Cards>
                {Object.keys(todo.cards).map((keyCard: string) => {
                    const card = todo.cards[keyCard];
                    return <Card key={keyCard} title={card.title} isFollowed={card.isFollowed} hasDescription={!!card.description} />;
                })}
            </Cards>

            <FooterList>
                <AddCardButton title="Ajouter une autre carte" />
            </FooterList>
        </div>
    );
};

export default List;
