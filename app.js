const secretWord = ["donut","hospital","humidifier","dinner","puppy","vitamin"]
let pos = 0
let displayedWord = ""
let correctAnswer = 0
let remainingNum = 7

const getNextWord = () => {
    const taken = document.querySelectorAll(".selected")
    for(let i =0;i<taken.length;i++){
        taken[i].classList.remove("selected")
        taken[i].disabled = false
    }
    displayedWord = secretWord[pos]
    let wordHTML = ""
    for(let i = 0;i<displayedWord.length;i++){
        wordHTML += `<span>${displayedWord[i]}</span>`
    }
    console.log(wordHTML)
    let wordText = ""
    for(let i = 0;i<displayedWord.length;i++){
        wordText += `<span> __ </span>` 
    }
    document.querySelector("h2").innerHTML = `<h3>What is the secret word?</h3>`
    document.querySelector("h2").innerHTML += `\n${wordText}`
    document.querySelectorAll("h2")[1].innerHTML = `<h3>Changes remaining: ${remainingNum}</h3>`
}

const startButtonPressed = (e) => {
    console.log("Resetting a game!")
    remainingNum = 7
    correctAnswer = 0
    pos = 0
    getNextWord()
}
const letterButtonPressed = (evt) => {
let correctCharPos = -1
    console.log("letter button pressed!")
    if(remainingNum>0){
        if(evt.target.classList.contains("btn-letter") === true){
            console.log("Person clicked alphabet button")
            evt.target.classList.add("selected")
            evt.target.disabled = true
            for(let i =0;i<displayedWord.length;i++){
                if(displayedWord[i] === evt.target.innerText.toLowerCase()){
                    console.log("Choose correct letter")
                    correctAnswer++
                    correctCharPos = i 
                    // console.log(`Correct letter position: ${correctCharPos}`)
                    document.querySelectorAll("span")[correctCharPos].innerText = evt.target.innerText
                    if(correctAnswer === displayedWord.length){
                        alert("You Win!")
                        pos++
                        getNextWord()
                    }
                    return
                }
            }
            remainingNum--
            document.querySelectorAll("h2")[1].innerHTML = `<h3>Changes remaining: ${remainingNum}</h3>`
            alert("You chose wrong letter")
        }
        else{
            console.log("Person clicked on something else!")
            console.log(evt.target)
        }
    }
    else{
        alert("You Lose!")
        return
    }
}
const pageLoaded = () => {
    getNextWord()
}
document.querySelector("button").addEventListener("click",startButtonPressed)
document.querySelector("#letters").addEventListener("click",letterButtonPressed)
document.addEventListener("DOMContentLoaded",pageLoaded)
