interface Props {
    title: string;
    type: 'submit';
}

const AddListButton: React.FC<Props> = ({ title = '', type }: Props) => (
    <div className="flex h-10 mb-2 mx-1 w-68 items-center rounded-sm cursor-pointer bg-white/[0.24] hover:bg-white/[0.32]">
        <button className="flex items-center w-full px-3 h-[30px] text-sm text-white" type={type}>
            <span className="relative mr-1 h-[20px] w-[20px] before:bg-white before:absolute before:top-1/2 before:left-1/2 before:h-3 before:w-[2px] before:translate-y-[-50%] before:translate-x-[-50%] after:bg-white after:absolute after:top-1/2 after:left-1/2 after:h-[2px] after:w-3 after:translate-y-[-50%] after:translate-x-[-50%]" />
            {title}
        </button>
    </div>
);

export default AddListButton;
