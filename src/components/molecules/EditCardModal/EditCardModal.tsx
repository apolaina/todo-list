import { RefObject, useContext } from 'react';
import { AppContext } from '../../../helpers/AppContext';
import { isConfirmAlertConfirmed, EntityTypeEnum } from '../../../helpers/ConfirmAlert';
import { Card } from '../../../models/Card';
import { Todo } from '../../../models/Todo';
import CardActionButton from '../../atoms/Button/CardActionButton/CardActionButton';
import FollowIcon from '../../atoms/Icon/FollowIcon/FollowIcon';
import FormContainer from '../Form/FormContainer/FormContainer';
import Modal from '../../atoms/Modal/Modal';
import ModalContent from '../ModalContent/ModalContent';
import ModalHeader from '../ModalHeader/ModalHeader';
import SubTitle from '../../atoms/SubTitle/SubTitle';
import CheckIcon from '../../atoms/Icon/CheckIcon/CheckIcon';

type Props = {
    todo: Todo;
    card: Card;
    refModal: RefObject<HTMLDivElement>;
    onDismiss: () => void;
};

const EditCardModal: React.FC<Props> = ({ todo, card, refModal, onDismiss }: Props) => {
    const { updateTodo } = useContext(AppContext);

    const removeCard = () => {
        const isConfirmed = isConfirmAlertConfirmed(EntityTypeEnum.Card, card.title);

        if (isConfirmed && card.id) {
            const { [card.id]: currentCard, ...restOfCards } = todo.cards;
            const updatedTodo = { ...todo, cards: { ...restOfCards } };
            updateTodo(updatedTodo);
        }
    };

    const onToggleFollow = () => {
        if (card.id) {
            const { id, ...restOfCard } = card;
            updateTodo({ ...todo, cards: { ...todo.cards, [card.id]: { ...restOfCard, isFollowed: !card.isFollowed } } });
        }
    };

    return (
        <Modal onDismiss={onDismiss} refModal={refModal}>
            <ModalHeader todoTitle={todo.title} card={card} />

            <ModalContent>
                <div className="grow">
                    <SubTitle value="Description" />
                    <div className="flex items-center text-sm">
                        <FormContainer todo={todo} card={card} />
                    </div>
                </div>

                <div className="pl-5 min-w-[190px]">
                    <SubTitle value="Actions" />
                    <div className="grid grid-rows-2 gap-2">
                        <CardActionButton title="Suivre" onClick={onToggleFollow}>
                            <FollowIcon />
                            {card.isFollowed && (
                                <div className="absolute right-1 w-[26px] h-[26px]">
                                    <CheckIcon />
                                </div>
                            )}
                        </CardActionButton>
                        <CardActionButton title="Supprimer" onClick={removeCard}>
                            <span className="flex items-center justify-center text-todo-icon font-semibold h-3.5 w-3.5">—</span>
                        </CardActionButton>
                    </div>
                </div>
            </ModalContent>
        </Modal>
    );
};

export default EditCardModal;
