type Props = {
    title: string;
};

const Title: React.FC<Props> = ({ title = '' }: Props) => <h1 className="pl-3 text-lg text-white font-bold">{title}</h1>;

export default Title;
