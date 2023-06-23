//   <input type="text" id="name-input" placeholder="Please enter your name" />
//     <h1>Hello, <span id="name-output">Anonymous</span>!</h1>


const input = document.querySelector('#name-input')
const span = document.querySelector('#name-output')
console.log(input.value)
console.log(span)

input.addEventListener('input', handlerQuery)

function handlerQuery(evt) {
    // console.log(evt.currentTarget.value);
    span.textContent = evt.target.value
    
    if (evt.target.value === '') {
        span.textContent = 'Anonymous'
    }
}