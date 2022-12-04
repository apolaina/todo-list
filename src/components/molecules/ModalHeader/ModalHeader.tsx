import { Card } from '../../../models/Card';
import FollowIcon from '../../atoms/Icon/FollowIcon/FollowIcon';

type Props = {
    todoTitle: string;
    card: Card;
};

const ModalHeader: React.FC<Props> = ({ todoTitle, card }: Props) => (
    <div className="mb-5">
        <h3 className="text-xl font-semibold leading-8">{card.title}</h3>
        <div className="flex items-center text-sm">
            <span>
                Dans la liste <span className="underline">{todoTitle}</span>
            </span>
            {card.isFollowed && (
                <div className="ml-1">
                    <FollowIcon />
                </div>
            )}
        </div>
    </div>
);

export default ModalHeader;
