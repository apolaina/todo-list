import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

const Header: React.FC<Props> = ({ children }: Props) => <div className="flex items-center m-2">{children}</div>;

export default Header;
