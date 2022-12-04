import { useState } from 'react';

type Props = {
    isUpdateCardMode: boolean;
    onChange: (value: string) => void;
    placeholder?: string;
    initialValue?: string;
};

const CardField: React.FC<Props> = ({
    isUpdateCardMode,
    initialValue = '',
    placeholder = 'Saisissez un titre pour cette carte…',
    onChange,
}: Props) => {
    const [value, setValue] = useState<string>(initialValue);

    return (
        <textarea
            autoFocus
            value={value}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                setValue(e.target.value);
                onChange(e.target.value);
            }}
            className={`w-full text-sm placeholder:text-todo-grey-300 rounded-sm shadow outline-0 ${
                !isUpdateCardMode ? 'min-h-[72px] px-2 pt-2' : 'p-3'
            }`}
            placeholder={placeholder}
        />
    );
};

export default CardField;
