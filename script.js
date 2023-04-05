const playerScoreDiv = document.getElementById('player-score')
const handsDiv = document.getElementById('hands')
const resultDiv = document.getElementById('result')
let playerScore = 0
let computerScore = 0

const getComputerChoice = () => {
    const choiceArray = ['Rock', 'Paper','Scissors']
    const randomNum = Math.floor(Math.random() * 3 )
    return choiceArray[randomNum]
}


const getResult = (playerChoice, computerChoice) =>{
    let score =0
    if(playerChoice === computerChoice){
        score = 0
    }
    else if(playerChoice === 'Rock' && computerChoice ==='Scissors'){
        score = 1
        playerScore +=1
        computerScore -=1
    }
    else if(playerChoice === 'Scissors' && computerChoice ==='Paper'){
        score = 1
        playerScore +=1
        computerScore -=1
    }
    else if(playerChoice === 'Paper' && computerChoice ==='Rock'){
        score =1
        playerScore +=1
        computerScore -=1
        
    }
    else{
        score = -1
        computerScore  += 1;
        playerScore -=1
    }
    return (score)
}
const showResult = (score, playerChoice,computerChoice) =>{
    if(score == 0){
        playerScoreDiv.innerText = `👦 ${playerScore} vs 🤖 ${computerScore}`
        handsDiv.innerText = `👦 ${playerChoice} vs 🤖 ${computerChoice}`  
        resultDiv.innerText = `It's a Draw!`
    }
    else if(score == -1){
        playerScoreDiv.innerText = `👦 ${playerScore} vs 🤖 ${computerScore}`
        handsDiv.innerText = `👦 ${playerChoice} vs 🤖 ${computerChoice}`
        resultDiv.innerText = `You lose!`
    }
    else {
        playerScoreDiv.innerText = `👦 ${playerScore} vs 🤖 ${computerScore}`
        handsDiv.innerText = `👦 ${playerChoice} vs 🤖 ${computerChoice}`
        resultDiv.innerText = `You Won!`
    }
}
const onclickRPS = (playerChoice) =>{
    // console.log(playerChoice)
    const computerChoice = getComputerChoice()
    const score = getResult(playerChoice,computerChoice)
    const result = showResult(score ,playerChoice,computerChoice)
}
const playGame = () =>{
    const rpsButtons = document.querySelectorAll('.rpsButton')
    // console.log(rpsButtons)
    rpsButtons.forEach(rpsButton =>{
        rpsButton.onclick = () => {
            onclickRPS(rpsButton.value)
        }
    })
}
const endGameButton = document.getElementById('endGameButton')
endGameButton.onclick = () => {endGame()} 
const endGame = () =>{
    playerScore = 0
    playerScoreDiv.innerText = ""
    resultDiv.innerText = ""
    handsDiv.innerText = ""
}

playGame()