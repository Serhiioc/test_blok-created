
import {renderImg, formFile} from './img.js';
import createDataObj, { data } from './form-data.js';
import viewErrorMessage from './validate.js'
import {renderCard, renderCardList} from './render-card.js';

const form = document.querySelector('.form');
const imgPrew = document.querySelector('.label__file');
const nextBtn = document.querySelector('.btn__next');

const dataArray = [];
let counter = 6;

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
    if (viewErrorMessage(data)) {
        dataArray.unshift({...data})
        formClean()
    } else {
        return false
    }
    if (dataArray.length <= counter) {
        renderCard(dataArray, 0)
    } else {
        nextBtn.style.display = 'block';

    }
})

nextBtn.addEventListener('click', () => {
    renderCardList(dataArray, counter)
    nextBtn.style.display = 'none';
    counter += 6;
})





