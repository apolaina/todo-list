import { useState, useEffect, useRef } from 'react';

export const useComponentVisible = (initialIsVisible: boolean, callback?: () => void) => {
    const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);
    const callbackRef = useRef<any>(null);
    const ref = useRef<any>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (event && ref.current && !ref.current.contains(event.target as Node)) {
            setIsComponentVisible(false);
            if (callbackRef && callbackRef.current) {
                callbackRef.current();
            }
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    useEffect(() => { callbackRef.current = callback; });

    return { ref, isComponentVisible, setIsComponentVisible };
}