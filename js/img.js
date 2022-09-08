
export const formFile = document.querySelector('.form__file');


export let imageUrl = '';

const createImg = (url) => {
    const img = document.querySelector('.img__file');
    img.src = url;
    img.style.display = "block";
}

export const renderImg = () => {
    const file = formFile.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
        createImg(reader.result);
        imageUrl = reader.result;
        formFile.disabled = 'true';
    } 
    

}

