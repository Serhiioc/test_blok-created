const validateStr = ' 1234567890абвгдеёэжзыийклмнопрстуфхцчшщъьюяАБВГДЕЁЭЖЗЫИЙКЛМНОПРСТУФХЦЧШЩЪЬЮЯ'

const checkItemToValidate = (value) => {
   const validateArr = validateStr.split('');
   let valid
   for (let i = 0; i < value.length; i++) {
     valid = validateArr.includes(value.trim()[i]) 
    if (valid === false) break
   }
   return valid;
}

export default checkItemToValidate;
