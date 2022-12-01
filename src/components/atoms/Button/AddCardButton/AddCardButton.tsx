import { useEffect, useRef, useState } from 'react';

interface Props {
    title: string;
}

const AddCardButton: React.FC<Props> = ({ title = '' }: Props) => {
    const [addAction, setAddAction] = useState<boolean>(false);

    return addAction ? (
        <div>
            <textarea
                autoFocus
                onBlur={() => setAddAction(false)}
                className="w-full min-h-[72px] px-2 pt-2 text-sm placeholder:text-todo-grey-300 shadow"
                placeholder="Saisissez un titre pour cette carte…"
            />
        </div>
    ) : (
        <div className="flex h-8 mb-2 items-center rounded-sm cursor-pointer hover:bg-todo-grey-500">
            <button className="flex items-center w-full px-3 h-[30px] text-sm text-todo-grey-300" onClick={() => setAddAction(true)}>
                <span className="relative mr-1 h-[20px] w-[20px] before:bg-todo-grey-300 before:absolute before:top-1/2 before:left-1/2 before:h-3 before:w-[2px] before:translate-y-[-50%] before:translate-x-[-50%] after:bg-todo-grey-300 after:absolute after:top-1/2 after:left-1/2 after:h-[2px] after:w-3 after:translate-y-[-50%] after:translate-x-[-50%]" />
                {title}
            </button>
        </div>
    );
};

export default AddCardButton;
