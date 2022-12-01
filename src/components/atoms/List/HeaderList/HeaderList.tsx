import { ReactNode } from 'react';

interface Props {
    title: string;
    onButtonClick: () => void;
}

const HeaderList: React.FC<Props> = ({ title, onButtonClick }: Props) => (
    <div className="flex w-full justify-between items-center pl-4 pr-2 py-2.5">
        <div className="text-todo-text text-sm font-semibold">{title}</div>
        <div className="flex h-8 w-8 items-center justify-center rounded-sm hover:bg-todo-grey-200 cursor-pointer" onClick={onButtonClick}>
            <span className="h-[3px] w-[3px] relative bg-todo-grey-300 text-[0px] rounded-full before:absolute before:p-[1.5px] before:left-[-6px] before:bg-todo-grey-300 before:text-[0px] before:rounded-full after:absolute after:p-[1.5px] after:right-[-6px] after:bg-todo-grey-300 after:text-[0px] after:rounded-full" />
        </div>
    </div>
);

export default HeaderList;
