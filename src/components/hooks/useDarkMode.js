import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

export function useDarkMode() {
// This sets the default key to search for to 'isDarkMode'
// If there is a key value pair matching the key 'isDarkMode', the app will use that data.
// If not, it will default to false?
    const [value, setValue] = useLocalStorage('isDarkMode');

// Every time the value is changed, the app will update accordingly. Creating a toggle efffect.
    useEffect(() => {
        return value ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode')
    }, [value]);

// Returning these values allows them to be deconstructed (and named) when the function is called. 
    return [value, setValue]
}