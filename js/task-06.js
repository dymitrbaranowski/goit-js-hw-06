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
const inputValueLength = inputEl.value.length;

const checkInputValueLength = () => {
  if (Number(dataLength) === Number(inputValueLength)) {
    inputEl.classList.add("valid")
  } else {
    inputEl.classList.add("invalid")
  }
}
inputEl.addEventListener("blur", checkInputValueLength)
console.log(inputValueLength);
