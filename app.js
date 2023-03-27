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


 freqNeedle.style.transform = `rotate(0deg)`;




const init = () =>{
    
    currentFreq = document.querySelector(".current-freq").value;
    numbers.innerHTML = currentFreq;
    if(currentFreq >= 0 && currentFreq <= 9999){
        
        currentFreq.innerHTML = soundFreq;
        if (currentFreq < 100 ) {
            note.innerHTML = "E";
            let goal = e2;
            let needleDeg = (currentFreq - goal) * 5;
            console.log('needleDeg', needleDeg)
             freqNeedle.style.transform = `rotate(${needleDeg}deg )`; 
        }     
        else if(currentFreq >= 100 && currentFreq <= 130){
            note.innerHTML = "A";
            let goal = a2;
            let needleDeg = (currentFreq - goal) * 5;
            console.log("needleDeg", needleDeg);
            freqNeedle.style.transform = `rotate(${needleDeg}deg )`; 
        }
    
       
        console.log('cikis')
    }
    
}
setTimeout(init, 4000);
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



