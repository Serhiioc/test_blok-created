
const container = document.querySelector('.container');

const createCard = (data) => {
    const card = `
             <a href="${data.link}" class="card">
             <img class="card__img" src="${data.img}" alt="${data.title}">
             <h2 class="card__title">${data.title}</h2>
             <p class="card__desc">${data.desc}</p>
             </a>

    `
    return card
}

export const renderCard = (arr, i) => {
            const block = document.createElement('div');
            block.innerHTML = createCard(arr[i])
            container.insertAdjacentElement('afterBegin', block);
}



