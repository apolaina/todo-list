import DismissButton from '../../../atoms/Button/CloseButton/CloseButton';
import ConfirmButton from '../../../atoms/Button/ConfirmButton/ConfirmButton';

type Props = {
    confirmButtonTitle: string;
    className?: string;
    onDismiss: () => void;
};

const FormActions: React.FC<Props> = ({ confirmButtonTitle = '', className, onDismiss }: Props) => (
    <div className={`flex w-full ${className}`}>
        <ConfirmButton title={confirmButtonTitle} />
        <DismissButton outlined onDismiss={onDismiss} />
    </div>
);

export default FormActions;
