const amountOfClicksUI = document.getElementById("amountOfClicks")
const grandma = document.getElementById("grandma")
let clickCount = Number(localStorage.getItem("clickCount")) + 0
const body = document.getElementById("body")

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

let darkModeIsOn = 0
const allPText = document.getElementsByTagName("p")
const allH1Text = document.getElementsByTagName("h1")

// added dark mode toggle to meet req. mbmb

function darkmodetoggle() {
    if (darkModeIsOn === 0) {
        body.style.backgroundColor = "darkblue"

        for (let p of allPText) {
            allPText.style.color = "white"
        }
        for (let h1 of allH1Text) {
            allH1Text.style.color = "white"
        }

        darkModeIsOn = 1
    } else if (darkModeIsOn === 1) {
        body.style.backgroundColor = "lightblue"

        for (let p of allPText) {
            allPText.style.color = "black"
        }
        for (let h1 of allH1Text) {
            allH1Text.style.color = "black"
        }

        darkModeIsOn = 0
    }
}
