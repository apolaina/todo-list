import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

const ModalContent: React.FC<Props> = ({ children }: Props) => <div className="mb-5 flex">{children}</div>;

export default ModalContent;
