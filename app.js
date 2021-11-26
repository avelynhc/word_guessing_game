const displayedWord = "humidifier"
let correctAnswer = 0
let remainingNum = 7
const toggleButtons = (shouldDisable) => {
    const buttonArray = document.querySelectorAll(".btn-letter")
    for (let i = 0; i < buttonArray.length; i++) {
        buttonArray[i].disabled = shouldDisable
        buttonArray[i].classList[shouldDisable ? "add" : "remove"]("selected")
    }
}
const startButtonPressed = () => {
    correctAnswer = 0
    remainingNum = 7
    let wordText = ""
    for (let i = 0; i < displayedWord.length; i++) {
        wordText += `<span id="underscore"> __ </span>` 
    }
    toggleButtons(false)
    // document.querySelector("h2").innerText = "What is the secret word?"
    document.querySelector("#secret-word").innerHTML = `<div>${wordText}</div>`
    document.querySelector("#remain-chance").innerText = remainingNum
    document.querySelector("p").innerText = ""
}
const letterButtonPressed = (evt) => {
    document.querySelector("#lbl-results").innerText = ""
    if (remainingNum != 1) {
        if (evt.target.classList.contains("btn-letter")) {
            evt.target.classList.add("selected")
            evt.target.disabled = true
            let flag = false
            for (let i = 0; i < displayedWord.length; i++) {
                if (displayedWord[i] === evt.target.innerText.toLowerCase()) {
                    correctAnswer++
                    if (correctAnswer === displayedWord.length) {
                        setTimeout(() => {
                            alert("You Win!")
                            document.querySelectorAll("#underscore")[i].innerText = `${evt.target.innerText} `
                            toggleButtons(true)
                        }, 100)
                    } else {
                        document.querySelectorAll("#underscore")[i].innerText = `${evt.target.innerText} `
                    }
                    flag = true
                }
            }
            if (!flag) {
                remainingNum--
                document.querySelector("#remain-chance").innerText = remainingNum
                document.querySelector("#lbl-results").innerText = "Sorry, this letter is not in the word."
            }
        }
    } else {
        setTimeout(() => {
            alert("You Lose!")
            remainingNum--
            document.querySelector("#remain-chance").innerText = remainingNum
            toggleButtons(true)
        }, 100)
    }
}
document.querySelector("#btn-start").addEventListener("click", startButtonPressed)
document.querySelector("#letters").addEventListener("click", letterButtonPressed)