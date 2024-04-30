import './style.css';

let container = document.createElement("div");
document.body.appendChild(container)
container.className = "container";

let octavePattern = "BNBNBBNBNBNB";
let octaves_Count = 2;

// let white;
// let black;

for (let i = 0; i < octaves_Count; i++) {

  for (let j = 0; j < octavePattern.length; j++) {
    // console.log(octavePattern[j+1]);
  
    if (octavePattern[j] + octavePattern[j+1] === "BN") {
      let white = document.createElement("div")
      white.className = "white"
      container.appendChild(white)
      
      let black = document.createElement("div")
      black.className = "black"
      white.appendChild(black)
    }else if(octavePattern[j] + octavePattern[j+1] === "BB"){
      let white = document.createElement("div")
      white.className = "white"
      container.appendChild(white)
    }
  }
  let white = document.createElement("div")
  white.className = "white"
  container.appendChild(white)
}
let white = document.createElement("div")
white.className = "white"
container.appendChild(white)

let obj = {}
consle.log(obj);

let id = 1;

for (let i = 0; i < container.children.length; i++) {
  container.children[0] + '';
}

let isMapping = false; 
let mappingBtn = document.querySelector('.btn');

mappingBtn.addEventListener('click', () => {
  isMapping = true;
  mappingBtn.disabled = true;
  // console.log(container.children);
  // console.log(white.children);

  // for (let i = 0; i < container.children.length; i++) {
  //   console.log(container.children[i].classList.toggle("white_blue"));

  container.children[0].classList.toggle("white_blue");
});

// CONFIG CLAVIER

navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);

function onMIDISuccess(midiAccess) {
  midiAccess.inputs.forEach(input => {
    console.log(input);
    input.onmidimessage = onMIDIMessage;
  });
}

function onMIDIFailure(error) {
}

function onMIDIMessage(event) {
  let str = `MIDI message received at timestamp ${event.timeStamp}[${event.data.length} bytes]: `;
  for (const character of event.data) {
    str += `0x${character.toString(16)} `;
  }
  console.log(str);
  console.log(event.data);
}