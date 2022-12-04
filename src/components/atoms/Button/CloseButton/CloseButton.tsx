type Props = {
    outlined: boolean;
    onDismiss: () => void;
};

const DismissButton: React.FC<Props> = ({ outlined, onDismiss }: Props) => (
    <button
        className={`group flex items-center w-full relative px-3 h-8 w-8 text-sm ${!outlined && 'rounded-full hover:bg-todo-grey-500'}`}
        onClick={onDismiss}
    >
        <span
            className={`absolute translate-y-[-50%] translate-x-[-50%] top-1/2 left-1/2 rotate-45 before:bg-todo-icon hover:before:bg-todo-text before:absolute before:top-1/2 before:left-1/2 before:w-0.5 before:translate-y-[-50%] before:translate-x-[-50%] after:bg-todo-icon after:absolute after:top-1/2 after:left-1/2 after:h-0.5 after:translate-y-[-50%] after:translate-x-[-50%] hover:after:bg-todo-text ${
                !outlined
                    ? 'before:h-3.5 after:w-3.5 group-hover:before:bg-todo-text group-hover:after:bg-todo-text'
                    : 'ml-1 h-5 w-5 before:h-5 after:w-5'
            }`}
        />
    </button>
);

export default DismissButton;
