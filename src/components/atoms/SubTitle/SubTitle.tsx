type Props = {
    value: string;
};

const SubTitle: React.FC<Props> = ({ value = '' }: Props) => <h3 className="mb-1 text-lg font-semibold">{value}</h3>;

export default SubTitle;
