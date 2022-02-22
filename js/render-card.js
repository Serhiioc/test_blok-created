
const container = document.querySelector('.container');

const createCard = ( data) => {
    const {img, title, desc, link} = data;
    const card = `
             <a href="${link}" class="card card--preload">
             <img class="card__img" src="${img}" alt="${title}">
             <h2 class="card__title">${title}</h2>
             <p class="card__desc">${desc}</p>
             </a>

    `
    return card
}




const renderCard = (arr, index) => {
    container.innerHTML = "";
    for (let i = index; i < arr.length; i++) {
            container.innerHTML += createCard(arr[i])
        
    }
}

export default renderCard