const loadData = (key) => () => {
    try {
        const serializedData = localStorage.getItem(key);
        if (serializedData === null) {
            return undefined;
        }
        return JSON.parse(serializedData);
    }
    catch (err) {
        return undefined;
    }
};

const saveData = (key) => (data) => {
    try {
        const serializedData = JSON.stringify(data);
        localStorage.setItem(key, serializedData);
    }
    catch(err) {
        console.error(err);
    }
};

export const loadMetadata = loadData('metadata');
export const saveMetadata = saveData('metadata');
export const loadCustomUsers = loadData('users');
export const saveCustomUsers = saveData('users');
export const loadAuth = loadData('auth');
export const saveAuth = saveData('auth');
