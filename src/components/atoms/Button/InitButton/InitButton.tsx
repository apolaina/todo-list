interface Props {
    title: string;
    onClick: () => void;
}

const InitButton: React.FC<Props> = ({ title = '', onClick }: Props) => {
    return (
        <button
            className="h-8 ml-5 px-3 text-sm text-white bg-todo-green-50 hover:bg-todo-green-100 rounded-sm font-['Arial']"
            onClick={onClick}
        >
            {title}
        </button>
    );
};

export default InitButton;
