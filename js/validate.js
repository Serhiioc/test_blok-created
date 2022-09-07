const validateStr = '1234567890абвгґдежзиійклмнопрстуфхцчшщьюяАБВГҐДЕЖЗИІЙКЛМНОПРСТУФХЦЧШЩЬЮЯ'.split('');
const validateLink = ['.'];

const checkItemToValidate = (value) => {
   let valid;
   for (let i = 0; i < value.length; i++) {
     valid = validateStr.includes(value.trim()[i])
    if (valid === false ) break
   }
   return valid;
}

const checkLinkToValidate = (value) => {
   let valid;
   for (let i = 0; i < value.length; i++) {
     valid = validateLink.includes(value.trim()[i])
    if (valid === true ) break
   }
   return valid;
}

const checkImgTovalidate = (value) => {
   if (value) {
      return true
   } else {
      return false
   }
}


const errorMessage = (validFunc, messageBlock, message) => {
   const elem = document.querySelector(messageBlock);
   if (validFunc) {
      elem.textContent = '';
      return true
   } else {
      elem.textContent = message;
      return false
   }
}

const viewErrorMessage = (data) => {
   const titleValid = errorMessage(checkItemToValidate(data.title), '.error__title', 'Введіть кирилицю');
   const descValid = errorMessage(checkItemToValidate(data.desc), '.error__desc', 'Введіть кирилицю');
   const linkValid = errorMessage(checkLinkToValidate(data.link), '.error__link', 'Введіть посилання');
   const imgValid = errorMessage(checkImgTovalidate(data.img), '.error__img', 'Добавте картинку');

   return titleValid && descValid && linkValid && imgValid


}

export default viewErrorMessage;