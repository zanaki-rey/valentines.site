// --- SCREENS ---
const lockScreen = document.getElementById("lockScreen");
const valentineScreen = document.getElementById("valentineScreen");
const letterScreen = document.getElementById("letterScreen");
const songScreen = document.getElementById("songScreen");

// --- PASSWORD ---
const passwordInput = document.getElementById("passwordInput");
const unlockBtn = document.getElementById("unlockBtn");
const errorMsg = document.getElementById("errorMsg");
const correctPassword = "062125";

unlockBtn.addEventListener("click", () => {
  if(passwordInput.value === correctPassword){
    lockScreen.classList.add("hidden");
    valentineScreen.classList.remove("hidden");
  } else {
    errorMsg.innerHTML = "Wrong password 😭 try again!";
    shake(lockScreen);
  }
});

// --- VALENTINE BUTTONS ---
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 120);
  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

// YES BUTTON → LETTER
yesBtn.addEventListener("click", () => {
  valentineScreen.classList.add("hidden");
  letterScreen.classList.remove("hidden");
  songScreen.classList.remove("hidden"); // show song page too
  startLetter();
  setInterval(createFloatingHeart, 500); // floating hearts
  createHangingDecor(); // hanging hearts/flowers
});

// --- TYPEWRITER EFFECT FOR LETTER ---
const letterText = document.getElementById("letterText");
const fullLetter = [
  "Hi love 💗",
  "I just wanted to tell you something...",
  "Every time I see you, my heart skips a beat 💖",
  "You make my days brighter and my life happier 😭✨",
  "I hope this little surprise makes you smile 😊",
  "Happy Valentine’s Day! 💘",
  "- From someone who likes you a LOT 😳💗"
];

function startLetter(){
  let line = 0;
  letterText.innerHTML = "";
  function typeLine(){
    if(line < fullLetter.length){
      let charIndex = 0;
      function typeChar(){
        if(charIndex < fullLetter[line].length){
          letterText.innerHTML += fullLetter[line][charIndex];
          charIndex++;
          setTimeout(typeChar, 50);
        } else {
          letterText.innerHTML += "<br><br>";
          line++;
          setTimeout(typeLine, 300);
        }
      }
      typeChar();
    }
  }
  typeLine();
}

// --- FLOATING HEARTS ---
function createFloatingHeart(){
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "💖";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.fontSize = (12 + Math.random()*24) + "px";
  document.body.appendChild(heart);
  setTimeout(()=>{ heart.remove() }, 4000);
}

// --- HANGING HEARTS / FLOWERS ---
function createHangingDecor(){
  const symbols = ["💖", "💗", "🌸", "🌺", "🌼"];
  for(let i=0; i<8; i++){
    const decor = document.createElement("div");
    decor.classList.add("hanging");
    decor.innerText = symbols[Math.floor(Math.random()*symbols.length)];
    decor.style.left = (i*10 + Math.random()*80) + "vw";
    decor.style.top = "0px";
    decor.style.fontSize = (20 + Math.random()*30) + "px";
    document.body.appendChild(decor);
  }
}

// --- SHAKE EFFECT ---
function shake(element){
  element.style.animation = "shake 0.5s";
  element.addEventListener("animationend", () => {
    element.style.animation = "";
  });
}

const style = document.createElement('style');
style.innerHTML = `
@keyframes shake {
  0% { transform: translateX(0px); }
  25% { transform: translateX(-10px); }
  50% { transform: translateX(10px); }
  75% { transform: translateX(-10px); }
  100% { transform: translateX(0px); }
}`;
document.head.appendChild(style);
