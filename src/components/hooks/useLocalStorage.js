import { useState } from 'react';

export function useLocalStorage(key, initialValue) {
// This initializes state, and sets the default value equal to the key value pair that
// matches the given key parameter. If no key is found, defaults to empty.
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    })

// Here the setter simply sets the state AND localStorage to a key value pair given.
    function setValue(value) {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    }

    return [storedValue, setValue];
}