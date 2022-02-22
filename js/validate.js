const validateStr = ' 1234567890абвгґдеёэжзыиійклмнопрстуфхцчшщъьюяАБВГҐДЕЁЭЖЗЫИІЙКЛМНОПРСТУФХЦЧШЩЪЬЮЯ'

const checkItemToValidate = (value) => {
   const validateArr = validateStr.split('');
   let valid;
   for (let i = 0; i < value.length; i++) {
     valid = validateArr.includes(value.trim()[i]) 
    if (valid === false) break
   }
   return valid;
}

const viewErrorMassege = (data, arr) => {
   const titleValid = checkItemToValidate(data.title);
   const descValid = checkItemToValidate(data.desc);
   switch (titleValid) {
      case false:
         const titleError = document.querySelector('.label__title');
         titleError.append('Введіть кирилицю')
         break;
   
      default:
         break;
   }

   switch (descValid) {
      case false:
         const descError = document.querySelector('.label__desc');
         descError.append('Введіть кирилицю')
         break;
   
      default:
         break;
   }

   if (titleValid && descValid) {
      arr.push(data);
      return true
   } else {
      return false
   }

}

export default viewErrorMassege;
