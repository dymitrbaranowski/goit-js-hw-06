const input = document.getElementById("font-size-control");
const span = document.getElementById("text");
input.addEventListener("input", handleInputRange);
function handleInputRange(event) {
  span.style.fontSize = event.currentTarget.value + "px";
}


{/* <input id="font-size-control" type="range" min="16" max="96" />
    <br />
    <span id="text">Abracadabra!</span> */}


    // const inputRangeRef = document.querySelector("#font-size-control");
    // const inputTextRef = document.querySelector("#text");

    // const handleInput = () => {
    //   inputTextRef.style.fontSize = `${inputRangeRef.value}px`;
    // };

    // inputRangeRef.addEventListener("input", handleInput);