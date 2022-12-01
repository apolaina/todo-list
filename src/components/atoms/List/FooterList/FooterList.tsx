import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

const FooterList: React.FC<Props> = ({ children }: Props) => <div className="px-2">{children}</div>;

export default FooterList;
