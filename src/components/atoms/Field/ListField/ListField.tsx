type Props = {
    onChange: (value: string) => void;
    placeholder?: string;
};

const ListField: React.FC<Props> = ({ placeholder = 'Saisissez le titre de la liste…', onChange }: Props) => (
    <input
        autoFocus
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
        className="w-full h-9 px-3 text-sm placeholder:text-todo-grey-300 rounded-sm shadow border-0"
        placeholder={placeholder}
    />
);

export default ListField;
