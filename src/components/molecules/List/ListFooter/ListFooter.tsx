import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

const ListFooter: React.FC<Props> = ({ children }: Props) => <div className="p-2">{children}</div>;

export default ListFooter;
