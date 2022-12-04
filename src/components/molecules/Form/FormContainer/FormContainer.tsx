import { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AppContext } from '../../../../helpers/AppContext';
import { useComponentVisible } from '../../../../hooks/useComponentVisible';
import { Card } from '../../../../models/Card';
import { Todo } from '../../../../models/Todo';
import CardDescription from '../../Card/CardDescription/CardDescription';
import Form from '../Form';

type Props = {
    title?: string;
    todo?: Todo;
    card?: Card;
};

const FormContainer: React.FC<Props> = ({ title = '', todo, card }: Props) => {
    const isUpdateTodoMode = todo;
    const isUpdateCardMode = todo && card;
    const { updateTodo } = useContext(AppContext);
    const [titleCard, setTitleCard] = useState<string>('');
    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false, () => {
        if (!!isUpdateTodoMode && titleCard) {
            addCard(titleCard);
        }
    });

    const onSubmit = (value: string) => {
        if (isUpdateCardMode) {
            editCard(value);
        } else if (isUpdateTodoMode) {
            addCard(value);
        } else {
            addTodo(value);
        }
    };

    const addTodo = (todoTitle: string) => {
        updateTodo({ id: uuidv4(), title: todoTitle, cards: {} });
    };

    const addCard = (cardTitle: string) => {
        if (isUpdateTodoMode) {
            updateTodo({ ...todo, cards: { ...todo.cards, [uuidv4()]: { title: cardTitle } } });
        }
    };

    const onTitleCardChange = (titleCard: string) => {
        if (isUpdateTodoMode) {
            setTitleCard(titleCard);
        }
    };

    const editCard = (cardDescription: string) => {
        if (isUpdateCardMode && card.id) {
            const { id, ...restOfCard } = card;
            updateTodo({ ...todo, cards: { ...todo.cards, [card.id]: { ...restOfCard, description: cardDescription } } });
        }
    };

    return isComponentVisible ? (
        <Form
            isUpdateTodoMode={!!isUpdateTodoMode}
            isUpdateCardMode={!!isUpdateCardMode}
            initialValue={!!isUpdateCardMode ? card.description : ''}
            onDismiss={() => setIsComponentVisible(false)}
            onSubmit={onSubmit}
            onChange={onTitleCardChange}
            refDiv={ref}
            confirmButtonTitle={!!isUpdateCardMode ? 'Enregistrer' : !!isUpdateTodoMode ? 'Ajouter une carte' : 'Ajouter une liste'}
        />
    ) : (
        <>
            {!!isUpdateCardMode ? (
                <CardDescription description={card.description} onClick={() => setIsComponentVisible(true)} />
            ) : !!isUpdateTodoMode ? (
                <div className="flex h-8 mb-2 items-center rounded-sm cursor-pointer hover:bg-todo-grey-500">
                    <button
                        className="flex items-center w-full px-3 h-[30px] text-sm text-todo-grey-300"
                        onClick={() => setIsComponentVisible(true)}
                    >
                        <span className="relative mr-1 h-[20px] w-[20px] before:bg-todo-grey-300 before:absolute before:top-1/2 before:left-1/2 before:h-3 before:w-[2px] before:translate-y-[-50%] before:translate-x-[-50%] after:bg-todo-grey-300 after:absolute after:top-1/2 after:left-1/2 after:h-[2px] after:w-3 after:translate-y-[-50%] after:translate-x-[-50%]" />
                        {title}
                    </button>
                </div>
            ) : (
                <div className="flex h-10 w-full items-center rounded-sm cursor-pointer bg-white/[0.24] hover:bg-white/[0.32] transition">
                    <button
                        className="flex items-center w-full px-3 h-[30px] text-sm text-white"
                        onClick={() => setIsComponentVisible(true)}
                    >
                        <span className="relative mr-1 h-[20px] w-[20px] before:bg-white before:absolute before:top-1/2 before:left-1/2 before:h-3 before:w-[2px] before:translate-y-[-50%] before:translate-x-[-50%] after:bg-white after:absolute after:top-1/2 after:left-1/2 after:h-[2px] after:w-3 after:translate-y-[-50%] after:translate-x-[-50%]" />
                        {title}
                    </button>
                </div>
            )}
        </>
    );
};

export default FormContainer;
