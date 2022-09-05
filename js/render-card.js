
const container = document.querySelector('.container');

const createCard = (data) => {
    const {img, title, desc, link} = data;
    const card = `
             <a href="${link}" class="card">
             <img class="card__img" src="${img}" alt="${title}">
             <h2 class="card__title">${title}</h2>
             <p class="card__desc">${desc}</p>
             </a>

    `
    console.log(data);
    return card
}

export const renderCard = (arr, i) => {
            const block = document.createElement('div');
            block.innerHTML = createCard(arr[i])
            container.insertAdjacentElement('afterBegin', block);
}

export const renderCardList = (arr, counter) => {
    for (let i = arr.length - (counter+1); i >= 0; i--) {
        renderCard(arr, i)
        console.log('arr:', arr.length - counter, counter);
    }
}

