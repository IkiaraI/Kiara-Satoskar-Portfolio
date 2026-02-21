/* Scramble word */
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*";
let interval = null;
const target = document.querySelector("#hacker-text");

function startScramble() {
  let iteration = 0;
  const finalName = "KIARA"; 
  clearInterval(interval);
  
  interval = setInterval(() => {
    target.innerText = target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) return finalName[index]; 
        return letters[Math.floor(Math.random() * letters.length)];
      })
      .join("");
    
    if(iteration >= finalName.length) {
      clearInterval(interval);
      triggerJumpScare(); 
    }
                                                   
    iteration += 1 / 10; 
  }, 60);
}
/* papi jumpscare */
function triggerJumpScare() {
    const overlay = document.getElementById('jumpscare-overlay');
    const sound = document.getElementById('scare-sound');
    
    
    if (sound) {
        sound.currentTime = 50;
        sound.play();
    }
    // PAPI sound.currentTime = 7;
    
   
    overlay.style.display = 'block';

    
    setTimeout(() => {
        overlay.style.display = 'none';
        if (sound) {
            sound.pause();
            sound.currentTime = 0; // Reset for next time
        }
    }, 2000);
}


const enterBtn = document.getElementById('enter-btn');
const modal = document.getElementById('welcome-modal');

enterBtn.addEventListener('click', () => {

  modal.style.display = 'none';
    
    startScramble();
  
});

