import { imageUrl } from './img.js';

const createDataObj = (form) => {
    const data = {};
    for (let item of form) {
        data[item.name] = item.value
    }
    data.img = imageUrl;
    return data;
}


export default createDataObj;
