const count = document.querySelector("#counter");
const decr = count.firstElementChild;
const incr = count.lastElementChild;
const spa = document.querySelector(dataset.value);
console.log(decr);
console.dir(count.children);

let counterValue = 0;
decr.addEventListener('click', handlerclick)

function handlerclick(evt) {
    counterValue -= 1;
    spa.textValue + counterValue;
}
 
// // count.dataset.value = counterValue;

// const selectors = {
//     decr: document.querySelector(button.dataset.action)
// }

// console.log(selectors.decr)






/* <div id="counter">
  <button type="button" data-action="decrement">
    -1
  </button>
  <span id="value">0</span>
  <button type="button" data-action="increment">
    +1
  </button>
</div>; */