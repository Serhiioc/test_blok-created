
import {createImg, formFile} from './img.js';
import getItemValue from './form-data.js';
import validateItem from './validate.js'
import renderCard from './render-card.js';

const form = document.querySelector('.form');
const imgPrew = document.querySelector('.label__file');
const nextBtn = document.querySelector('.btn__next');

const dataArray = [];
let imageUrl = '';

const renderImg = (parrent, className) => {
    const file = formFile.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
        createImg(reader.result, parrent, className);
        imageUrl = reader.result;
        formFile.disabled = 'true';
    } 
    

}

formFile.addEventListener('change', () => {
    renderImg(imgPrew)
    
})

form.addEventListener('submit', (evt) => {
    evt.preventDefault()
    const data = {};
    getItemValue(data, form) 
    data.img = imageUrl;
    if (validateItem(data.title.trim()) && validateItem(data.desc.trim())) {
        dataArray.push(data);
    } else {
        alert('введите руские буквы')
        return false
    }
    if (dataArray.length < 6) {
        renderCard(dataArray, 0)
    } else {
        console.log('5');
        nextBtn.style.display = 'block';
    }
    imgPrew.querySelector('img').remove();
    formFile.removeAttribute('disabled');
    form.reset();

})

nextBtn.addEventListener('click', () => {
    renderCard(dataArray, 5)
    nextBtn.style.display = 'none';
})





