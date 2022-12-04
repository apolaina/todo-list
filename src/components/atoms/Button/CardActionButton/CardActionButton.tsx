import { ReactNode } from 'react';

type Props = {
    title: string;
    children?: ReactNode;
    onClick: () => void;
};

const CardActionButton: React.FC<Props> = ({ title = '', onClick, children }: Props) => (
    <div
        className="flex items-center relative h-8 rounded-sm bg-todo-grey-600 cursor-pointer text-sm pl-3 pr-1 hover:bg-todo-grey-500 hover:text-black font-['Arial']"
        onClick={onClick}
    >
        {children && children}
        <span className="ml-1">{title}</span>
    </div>
);

export default CardActionButton;
