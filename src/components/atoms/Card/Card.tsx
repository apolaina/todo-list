import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

interface Props {
    title: string;
    isFollowed: boolean;
    hasDescription: boolean;
}

const Card: React.FC<Props> = ({ title, isFollowed, hasDescription }: Props) => (
    <div className="flex mb-2 flex-col bg-white rounded-sm cursor-pointer shadow hover:bg-todo-grey-400">
        <h2 className="flex items-center px-2 text-sm text-todo-text h-8">{title}</h2>
        <div className="px-2">
            {isFollowed && <FontAwesomeIcon className="text-todo-icon h-3.5 w-3.5 mx-1 mb-1" icon={faEye} />}
            {hasDescription && <FontAwesomeIcon className="text-todo-icon h-3.5 w-3.5 mx-1 mb-1" icon={faBars} />}
        </div>
    </div>
);

export default Card;
