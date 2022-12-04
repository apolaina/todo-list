import { useState, useEffect } from 'react';
import { Dictionary } from '../models/Dictionary';
import { LocalStorageKeys } from '../models/LocalStorageKeys';
import { Todo } from '../models/Todo';

const getStorageValue = (key: LocalStorageKeys, initialValue: Dictionary<Todo>) => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialValue;
};

export const useLocalStorage = (key: LocalStorageKeys, initialValue: Dictionary<Todo>) => {
    const [value, setValue] = useState(() => {
        return getStorageValue(key, initialValue);
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};
