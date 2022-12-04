import { FormEvent, RefObject, useEffect, useState } from 'react';
import CardField from '../../atoms/Field/CardField/CardField';
import ListField from '../../atoms/Field/ListField/ListField';
import FormActions from './FormActions/FormActions';

type Props = {
    refDiv: RefObject<HTMLFormElement>;
    initialValue?: string;
    isUpdateTodoMode?: boolean;
    isUpdateCardMode?: boolean;
    confirmButtonTitle?: string;
    onDismiss: () => void;
    onChange: (value: string) => void;
    onSubmit: (value: string) => void;
};

const Form: React.FC<Props> = ({
    refDiv,
    initialValue,
    isUpdateTodoMode = false,
    isUpdateCardMode = false,
    confirmButtonTitle = 'Enregistrer',
    onDismiss,
    onChange,
    onSubmit,
}: Props) => {
    const [value, setValue] = useState<string>('');

    const submitTodos = (event: FormEvent<HTMLFormElement>) => {
        if (!!value) {
            onSubmit(value);
            onDismiss();
            setValue('');
        } else {
            event.preventDefault();
        }
    };

    const onChangeTodos = (value: string) => {
        setValue(value);
        onChange(value);
    };

    return (
        <form
            ref={!isUpdateCardMode ? refDiv : null}
            className={`w-full rounded-sm ${!isUpdateTodoMode && 'p-1 bg-todo-grey-50'}`}
            onSubmit={submitTodos}
        >
            {isUpdateTodoMode ? (
                <CardField initialValue={initialValue} isUpdateCardMode={isUpdateCardMode} onChange={onChangeTodos} />
            ) : (
                <ListField onChange={setValue} />
            )}
            <FormActions confirmButtonTitle={confirmButtonTitle} className={isUpdateTodoMode ? 'mt-0.5' : 'mt-1'} onDismiss={onDismiss} />
        </form>
    );
};

export default Form;
