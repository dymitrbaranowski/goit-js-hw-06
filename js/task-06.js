{/* <input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/>; */}


const input = document.querySelector("#validation-input");
const dataLength = input.getAttribute('data-length');
console.log(input)
input.addEventListener('blure', handlerCheckInput)

function handlerCheckInput(evt) {
  const currentValue = evt.currentTarget.value;
  if (Number(datalength) === Number(currentValue.length)) {
    input.classList.add('valid')
  } else {
    input.classList.add('invalid')
  }
}
console.log()