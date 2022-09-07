
import {renderImg, formFile} from './img.js';
import createDataObj, { data } from './form-data.js';
import viewErrorMessage from './validate.js'
import {renderCard} from './render-card.js';

const form = document.querySelector('.form');
const imgPrew = document.querySelector('.label__file');
const nextBtn = document.querySelector('.btn__next');

const dataArray = [];
let counter = 9;

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
    let elem = 0;
    console.log(elem);
    for (let i = dataArray.length - (counter+1); i >= 0; i--) {
        if (elem < 9 ) {
            elem ++;
            renderCard(dataArray, i)
        }
    }
    if (dataArray.length <= (counter + 9)) {
        nextBtn.style.display = 'none';
    }
    
    console.log(counter);
    counter += 9;
    
})





