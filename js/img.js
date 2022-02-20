
export const formFile = document.querySelector('.form__file');


export const createImg = (url, imgParent, className) => {
    const img = document.createElement('img');
    if (className) {
        img.classList.add(className)
    }
    img.alt = 'hello';
    img.src = url;
    imgParent.insertAdjacentElement('afterBegin', img);
}


