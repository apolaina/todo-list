import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';

const CheckIcon: React.FC = () => <FontAwesomeIcon className="text-todo-green-100 w-full h-full" icon={faSquareCheck} />;

export default CheckIcon;
