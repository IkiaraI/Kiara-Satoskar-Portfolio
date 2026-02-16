/* --- FEATURE 1: HACKER NAME SCRAMBLE --- */
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
    
    if(iteration >= finalName.length) clearInterval(interval);
    iteration += 1 / 10; 
  }, 60);
}
/* --- FUNCTION 2: THE SYNCED JUMP SCARE --- */
function triggerJumpScare() {
    const overlay = document.getElementById('jumpscare-overlay');
    const sound = document.getElementById('scare-sound');
    
    // 1. Play the audio
    
    if (sound) {
        sound.currentTime = 50;
        sound.play();
    }
    // PAPI sound.currentTime = 7;
    
    // 2. Show the image/overlay
    overlay.style.display = 'block';

    // 3. Disappear after a quick flash (e.g., 400ms)
    setTimeout(() => {
        overlay.style.display = 'none';
        if (sound) {
            sound.pause();
            sound.currentTime = 0; // Reset for next time
        }
    }, 2000);
}

/* --- THE INITIALIZER (Run everything on load) --- */
window.onload = () => {
    // 1. Start the name scramble immediately
    startScramble();

    // 2. Set a random timer for the jumpscare (between 5-15 seconds)
    const randomTime = Math.floor(Math.random() * (15000 - 5000 + 1)) + 5000;
    setTimeout(triggerJumpScare, randomTime);
};

// Also trigger scramble on hover
target.onmouseover = startScramble;