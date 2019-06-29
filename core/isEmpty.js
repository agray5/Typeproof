import mapperToMap from './mapper'
export const isEmpty = (obj) => {
    return mapperToMap(obj, mapping)(obj);
}

const mapping = {
    object: (obj) => {
        return Object.keys(obj).length === 0
    },
    string: (str) => {
        if(str.length > 0)
            return false;
        return true;
    },
    number: (num) => {
        if(num !== 0)
            return false;
        return true;
    },
    array: (arr) => {
        return arr.length === 0
    }
}