import { ReactNode, RefObject } from 'react';
import DismissButton from '../Button/CloseButton/CloseButton';

type Props = {
    refModal: RefObject<HTMLDivElement>;
    onDismiss: () => void;
    children: ReactNode;
};

const Modal: React.FC<Props> = ({ refModal, onDismiss, children }: Props) => {
    return (
        <>
            <div className="modal-backdrop absolute w-full h-full z-40 bg-black/[0.64] inset-0">
                <div className="modal fixed top-0 left-0 z-40 inset-0 outline-none overflow-x-hidden overflow-y-auto">
                    <div className="flex items-center justify-center min-h-full">
                        <div ref={refModal} className="relative py-3 px-6 bg-white w-full max-w-3xl rounded-sm text-todo-text">
                            <div className="absolute right-1 top-1">
                                <DismissButton onDismiss={onDismiss} outlined={false} />
                            </div>

                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
