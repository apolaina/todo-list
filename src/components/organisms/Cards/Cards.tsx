import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

const Cards: React.FC<Props> = ({ children }: Props) => <div className="px-2">{children}</div>;

export default Cards;
