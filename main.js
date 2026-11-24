const amountOfClicksUI = document.getElementById("amountOfClicks")
const grandma = document.getElementById("grandma")
let clickCount = Number(localStorage.getItem("clickCount")) + 0

amountOfClicksUI.textContent = "Clicks:" + clickCount

async function gmaClick() {
    clickCount++
    amountOfClicksUI.textContent = "Clicks:" + clickCount;
    localStorage.setItem("clickCount", clickCount);   
}

if (clickCount >= 1000) {
    gravestone();
   }

grandma.addEventListener("click", function() {
   gmaClick();
   if (clickCount > 100) {
    spinGrandma();
   }

   if (clickCount >= 1000) {
    gravestone();
   }
})

async function spinGrandma() {
    grandma.classList.remove("is-spinning");
    void grandma.offsetWidth;
    grandma.classList.add("is-spinning");
}

grandma.addEventListener("animationend", () => {
    grandma.classList.remove("is-spinning");
});

function gravestone() {
    grandma.src = "tombstone.png"
}