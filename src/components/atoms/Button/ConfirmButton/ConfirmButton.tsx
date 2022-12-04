type Props = {
    title: string;
    className?: string;
    onClick?: () => void;
};

const ConfirmButton: React.FC<Props> = ({ title, className = '', onClick = () => {} }: Props) => (
    <>
        <button
            className={`${className} h-8 px-3 text-sm text-white bg-todo-green-50 hover:bg-todo-green-100 rounded-sm font-['Arial']`}
            type="submit"
            onClick={onClick}
        >
            {title}
        </button>
    </>
);

export default ConfirmButton;
