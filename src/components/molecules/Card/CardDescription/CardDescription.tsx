type Props = {
    description?: string;
    onClick: () => void;
};

const CardDescription: React.FC<Props> = ({ description, onClick }: Props) => (
    <div className="flex w-full items-center text-sm cursor-pointer" onClick={onClick}>
        {description ? (
            <span>{description}</span>
        ) : (
            <div className="py-2 px-3 bg-todo-grey-600 hover:bg-todo-grey-500 h-[50px] w-full text-sm rounded-sm">
                <span>Ajouter une description plus détaillée…</span>
            </div>
        )}
    </div>
);

export default CardDescription;
