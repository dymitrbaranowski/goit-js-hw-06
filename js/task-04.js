// const count = document.querySelector("#counter");
// const decr = count.firstElementChild;
// const incr = count.lastElementChild;

// const span = document.querySelector('#value');

// console.log(span);
// console.dir(count.firstElementChild);

// let counterValue = 0;
// decr.addEventListener('click', handlerclick)

// function handlerclick(evt) {
//     counterValue -= 1;
//    span.textcontent = counterValue;
// }


const counterValue = document.querySelector("#value");
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
decrementBtn.addEventListener("click", () => {
  counterValue.textContent -= 1;
});
incrementBtn.addEventListener("click", () => {
  counterValue.textContent = Number(counterValue.textContent) + 1;
});






/* <div id="counter">
  <button type="button" data-action="decrement">
    -1
  </button>
  <span id="value">0</span>
  <button type="button" data-action="increment">
    +1
  </button>
</div>; */