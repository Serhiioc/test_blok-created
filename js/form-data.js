
const getItemValue = (data, form) => {
    for (let item of form) {
        data[item.name] = item.value
    }
    
}

export default getItemValue;
