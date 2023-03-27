const freqNeedle = document.querySelector('.line');
const note = document.querySelector('.note');
const numbers = document.querySelector('.numbers');
let soundFreq = 0;
let goal = 0;
let e2 = 82.41;
let a2 = 110;
let d3 = 146.83;
let g3 = 196;
let b3 = 246.94;
let e4 = 329.63;

// freqNeedle.style.transform = `rotate(0deg)`;




const init = () =>{
    currentFreq = document.querySelector(".current-freq").value;
    numbers.innerHTML = currentFreq;
    console.log(currentFreq, "21");
    if(soundFreq >= 64 && soundFreq <= 345){
        currentFreq.innerHTML = `${soundFreq}`;
        if(true){
            note.innerHTML = "E";
            let goal = e2;
            let needleDeg = soundFreq - goal;
            console.log('burda')
            console.log(needleDeg)
        }     
        else if (soundFreq > 100) {
            note.innerHTML = "A";
            let goal = a2;
            let needleDeg = soundFreq - goal;
        }
        freqNeedle.style.transform = `rotate(${needleDeg * 5}deg )`;
        console.log('cikis')
    }
    
}
// document.addEventListener("keydown", (e) => {
    
//     if(soundFreq < 64) return;
  

//   if (e.key === "ArrowUp") {
//     freqNeedle.style.transform = `rotate(${soundFreq + 1}deg )`;
//     currentFreq.innerHTML = `${soundFreq}`;
//     soundFreq++;
//   } else if (e.key === "ArrowDown") {
//     freqNeedle.style.transform = `rotate(${soundFreq - 1}deg )`;
//     soundFreq--;
//   }
// });
// // currentFreq.addEventListener('onchange', (e)=>{
    
// // })



