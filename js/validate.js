const validateStr = '1234567890абвгґдежзиійклмнопрстуфхцчшщьюяАБВГҐДЕЖЗИІЙКЛМНОПРСТУФХЦЧШЩЬЮЯ'.split('');
const validateLink = [ '.'];

const checkItemToValidate = (value, validateArr) => {
   let valid;
   for (let i = 0; i < value.length; i++) {
     valid = validateArr.includes(value.trim()[i]) 
    if ( value === 'data.title' && valid === false ||  value === 'data.desc' && valid === false ) break
      else if (valid === true) break
   }
   return valid;
}

const errorMessage = (name, messageBlock, validateArr) => {
   const message = document.querySelector(messageBlock);
   if (!checkItemToValidate(name, validateArr)) {
      if (validateArr === validateLink) {
         message.textContent = 'Введіть посилання';
      } else {
         message.textContent = 'Введіть кирилицю';
      
      }
      return false
   } else {
      message.textContent = '';
      return true
   }
}

const viewErrorMessage = (data) => {
   const titleValid = errorMessage(data.title, '.error__title', validateStr);
   const descValid = errorMessage(data.desc, '.error__desc', validateStr);
   const linkValid = errorMessage(data.link, '.error__link', validateLink);

   if (titleValid && descValid && linkValid) {
      return true
   } else {
      return false
   }
  

}

export default viewErrorMessage;
