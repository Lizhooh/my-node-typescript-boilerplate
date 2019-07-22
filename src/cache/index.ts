
const cache = {};
const time = 1000 * 1.5;

export const get = (key: string) => {
    const obj = cache[key];
    if (obj && (Date.now() - obj.time) <= time) {
        return obj.date;
    }
    else {
        cache[key] = undefined;
        return false;
    }
}

export const set = (key: string, val: any) => {
    cache[key] = {
        time: Date.now(),
        date: val,
    };
    return true;
}

export default { get, set };
