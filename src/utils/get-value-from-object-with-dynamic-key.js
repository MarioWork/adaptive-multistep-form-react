
export const getValueFromObjectWithDynamicKey = (object, key) => {
    const keyExistsInObject = object ? key in object : false;
    const value = keyExistsInObject ? object[key] : undefined;
    return value;
};