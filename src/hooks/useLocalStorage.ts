import { useState, useEffect } from "react";
import { IDictionary } from "../models/IDictionary";
import { LocalStorageKeys } from "../models/LocalStorageKeys";

const getStorageValue = (key: LocalStorageKeys, initialValue: IDictionary<any>) => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialValue;
}

export const useLocalStorage = (key: LocalStorageKeys, initialValue: IDictionary<any>) => {
    const [value, setValue] = useState(() => {
        return getStorageValue(key, initialValue);
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};
