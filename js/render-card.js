
const container = document.querySelector('.container');

const createCard = (elem, data) => {
    const {img, title, desc, link} = data;
    const card = document.createElement('a');
    card.classList.add('card', 'card--preload');
    card.href = `${link}`;
    const innerCard = `
            <img class="card__img" src="${img}" alt="${title}">
            <h2 class="card__title">${title}</h2>
            <p class="card__desc">${desc}</p>
    `
    card.innerHTML = innerCard

   elem.appendChild(card)
}




const renderCard = (arr, index) => {
    container.innerHTML = "";
    for (let i = index; i < arr.length; i++) {
            createCard(container, arr[i])
        
    }
}

export default renderCard