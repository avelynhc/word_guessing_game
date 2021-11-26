let displayedWord = "humidifier"
let pos = 0
let correctAnswer = 0
let remainingNum = 7

const startButtonPressed = () => {
    console.log("Resetting a game!")
    const buttonArray = document.querySelectorAll(".btn-letter")
    for(let i = 0;i < buttonArray.length; i++){
        buttonArray[i].disabled = false
        buttonArray[i].classList.remove("selected")
    }
    remainingNum = 7
    let wordText = ""
    for(let i = 0;i < displayedWord.length;i++){
        wordText += `<span> __ </span>` 
    }
    document.querySelector("h2").innerHTML = `<h3>What is the secret word?</h3>
                                                <h3>${wordText}</h3>`
    document.querySelectorAll("h2")[1].innerHTML = `<h2>Changes remaining: ${remainingNum}</h2>`
    document.querySelector("p").innerText = ""
}
const letterButtonPressed = (evt) => {
let correctCharPos = -1
    console.log("letter button pressed!")
    document.querySelector("#lbl-results").innerHTML = ""
    if(remainingNum > 0){
        if(evt.target.classList.contains("btn-letter") === true){
            console.log("Person clicked alphabet button")
            console.log(`event.target = ${evt.target}`)
            evt.target.classList.add("selected")
            evt.target.disabled = true
            let flag = false
            for(let i = 0;i < displayedWord.length;i++){
                if(displayedWord[i] === evt.target.innerText.toLowerCase()){
                    console.log("Correct letter")
                    correctAnswer++
                    correctCharPos = i 
                    // console.log(`Correct letter position: ${correctCharPos}`)
                    console.log(`Person clicked ${evt.target.innerText}`)
                    document.querySelectorAll("span")[correctCharPos].innerText = `${evt.target.innerText} `
                    console.log(`Correct answer: ${correctAnswer}`)
                    console.log(`displayedWord length: ${displayedWord.length}`)
                    if(correctAnswer === displayedWord.length){
                        setTimeout(() => {
                            alert("You Win!")
                        }, 100)
                        const buttonArray = document.querySelectorAll(".btn-letter")
                        for(let i = 0;i < buttonArray.length; i++){
                            buttonArray[i].disabled = true
                            buttonArray[i].classList.add("selected")
                        }
                        // pos++
                        // correctAnswer = 0
                    }
                    flag = true
                }
            }
            if(flag === false){
                remainingNum--
                document.querySelectorAll("h2")[1].innerHTML = `<h2>Changes remaining: ${remainingNum}</h2>`
                console.log("Wrong letter")
                document.querySelector("#lbl-results").innerHTML = `<p>Sorry, this letter is not in the word.</p>`
            }
        }
        else{
            console.log("Person clicked on something else!")
            console.log(evt.target)
        }
    }
    else{
        setTimeout(() => {
            alert("You Lose!")
        }, 100)
        const buttonArray = document.querySelectorAll(".btn-letter")
        for(let i = 0;i < buttonArray.length; i++){
            buttonArray[i].disabled = true
            buttonArray[i].classList.add("selected")
        }
        return
    }
}
const pageLoaded = () => {
    let wordHTML = ""
    for(let i = 0;i < displayedWord.length;i++){
        wordHTML += `<span>${displayedWord[i]}</span>`
    }
    console.log(wordHTML)
    let wordText = ""
    for(let i = 0;i < displayedWord.length;i++){
        wordText += `<span> __ </span>` 
    }
    document.querySelector("h2").innerHTML += `<h3>${wordText}</h3>`
}
document.querySelector("button").addEventListener("click",startButtonPressed)
document.querySelector("#letters").addEventListener("click",letterButtonPressed)
document.addEventListener("DOMContentLoaded",pageLoaded)
