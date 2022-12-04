import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useComponentVisible } from '../../../hooks/useComponentVisible';
import { Card as CardType } from '../../../models/Card';
import { Todo } from '../../../models/Todo';
import EditCardModal from '../EditCardModal/EditCardModal';
import FollowIcon from '../../atoms/Icon/FollowIcon/FollowIcon';

type Props = {
    todo: Todo;
    card: CardType;
};

const Card: React.FC<Props> = ({ todo, card }: Props) => {
    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

    return (
        <>
            {isComponentVisible && <EditCardModal todo={todo} card={card} refModal={ref} onDismiss={() => setIsComponentVisible(false)} />}

            <div
                className="flex mb-2 flex-col bg-white rounded-sm cursor-pointer shadow hover:bg-todo-grey-400 last:mb-0"
                onClick={() => setIsComponentVisible(true)}
            >
                <h2 className="flex items-center px-2 text-sm text-todo-text h-8">{card.title}</h2>
                <div className="flex items-center px-2">
                    {card.isFollowed && (
                        <span className="mx-1 mb-1">
                            <FollowIcon />
                        </span>
                    )}
                    {!!card.description && <FontAwesomeIcon className="text-todo-icon h-3.5 w-3.5 mx-1 mb-1" icon={faBars} />}
                </div>
            </div>
        </>
    );
};

export default Card;
