const loadData = (key) => () => {
    try {
        const serializedData = localStorage.getItem(key);
        console.log(`[LOAD] Key: ${key} Data: ${serializedData}`);
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
    console.log(`[SAVE] Key: ${key} Data: ${JSON.stringify(data)}`);
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