/* <input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/>; */


// const input = document.querySelector("#validation-input");
// const dataLength = input.getAttribute('data-length');
// console.log(input)
// input.addEventListener('blure', handlerCheckInput)

// function handlerCheckInput(evt) {
//   // const currentValue = evt.currentTarget.value;
//   if (Number('dataLength') === Number(evt.currentValue.length)) {
//     input.classList.add('valid')
//   } else {
//     input.classList.add('invalid')
//   }
  
// }

const inputEl = document.querySelector('#validation-input')
const dataLength = inputEl.getAttribute('data-length');


const checkInputValueLength = () => {
  const inputValueLength = inputEl.value.length;
  if (Number(dataLength) === Number(inputValueLength)) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
}
inputEl.addEventListener("blur", checkInputValueLength)
console.log(checkInputValueLength);

// const input = document.querySelector('#validation-input');
// input.addEventListener('blur', inputBlur);
// function inputBlur() {
//     if (Number(input.value.length) === Number(input.dataset.length)) {
//         input.classList.add("valid");
//         input.classList.replace("invalid", "valid");      
//     } else {
//         input.classList.add("invalid");
//         input.classList.replace("valid","invalid");
//     };
// };