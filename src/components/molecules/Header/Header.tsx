import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

const Header: React.FC<Props> = ({ children }: Props) => <div className="flex items-center m-2">{children}</div>;

export default Header;
