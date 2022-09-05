
export const formFile = document.querySelector('.form__file');


export let imageUrl = '';

const createImg = (url, imgParent) => {
    const img = document.createElement('img');
    img.alt = 'hello';
    img.src = url;
    console.log(img);
    imgParent.insertAdjacentElement('afterBegin', img);
}

export const renderImg = (parrent) => {
    const file = formFile.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
        createImg(reader.result, parrent);
        imageUrl = reader.result;
        formFile.disabled = 'true';
    } 
    

}

