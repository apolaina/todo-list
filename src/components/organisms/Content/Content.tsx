import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

const Content: React.FC<Props> = ({ children }: Props) => <div className="flex items-start mx-1">{children}</div>;

export default Content;
