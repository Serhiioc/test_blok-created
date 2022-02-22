
import {renderImg, formFile} from './img.js';
import createDataObj, { data } from './form-data.js';
import viewErrorMassege from './validate.js'
import renderCard from './render-card.js';

const form = document.querySelector('.form');
const imgPrew = document.querySelector('.label__file');
const nextBtn = document.querySelector('.btn__next');

const dataArray = [];

formFile.addEventListener('change', () => {
    renderImg(imgPrew)
    
})

const formClean = () => {
    imgPrew.querySelector('img').remove();
    formFile.removeAttribute('disabled');
    form.reset();
}

form.addEventListener('submit', (evt) => {
    evt.preventDefault()
    createDataObj(form);
    if (viewErrorMassege(data, dataArray)) {
        formClean()
    } else {
        return false
    }
    if (dataArray.length <= 10) {
        renderCard(dataArray, 0)
    } else {
        nextBtn.style.display = 'block';
    }
})

nextBtn.addEventListener('click', () => {
    renderCard(dataArray, 10)
    nextBtn.style.display = 'none';
})





