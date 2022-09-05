import { imageUrl } from './img.js';


export const data = {};

const getItemValue = (form) => {
    for (let item of form) {
        data[item.name] = item.value
    }

}

const createDataObj = (form) => {
    getItemValue(form) 
    data.img = imageUrl;
    return data;
}


export default createDataObj;
