const getLS = (key) => {
    try {
        return localStorage.getItem(key);
    } catch (e) {
        return null;
    }
};

const storeLS = (key, value) => {
    try {
        return localStorage.setItem(key, value);
    } catch (e) {
        return null;
    }
};

const clearLS = () => {
    try {
        return localStorage.clear();
    } catch (e) {
        return null;
    }
};

const removeLS = (key) => {
    try {
        return localStorage.removeItem(key);
    } catch (e) {
        return null;
    }
};

const existsLS = (key) => {
    return key in localStorage;
};

export { getLS, storeLS, removeLS, clearLS, existsLS };
