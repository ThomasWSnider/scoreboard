let homeScore = 0
let awayScore = 0

function homePlusOne() {
  homeScore++
  console.log(homeScore);
  displayScore()
}
function awayPlusOne() {
  awayScore++
  console.log(awayScore);
  displayScore()
}
function homePlusThree() {
  homeScore += 3
  console.log(homeScore);
  displayScore()
}
function awayPlusThree() {
  awayScore += 3
  console.log(awayScore);
  displayScore()
}

function homePenalty() {
  homeScore--
  displayScore()
}

function awayPenalty() {
  awayScore--
  displayScore()
}

function displayScore() {
  let homeTeamElement = document.getElementById('homeScore')
  let awayTeamElement = document.getElementById('awayScore')

  if (homeScore < 10) {
    homeTeamElement.innerText = `0${homeScore}`
  }
  else {
    homeTeamElement.innerText = `${homeScore}`
  }

  if (awayScore < 10) {
    awayTeamElement.innerText = `0${awayScore}`
  }
  else {
    awayTeamElement.innerText = `${awayScore}`
  }
  if (homeScore == 21) {
    window.alert(`Home team wins!`);
    gameOver()
  }
  else if (awayScore == 21) {
    window.alert(`Away team wins!`);
    gameOver()
  }
}

function gameOver() {
  let hob = document.getElementById(`plusOneBtnHome`)
  let aob = document.getElementById(`plusOneBtnAway`)
  let htb = document.getElementById(`plusThreeBtnHome`)
  let atb = document.getElementById(`plusThreeBtnAway`)

  hob.disabled = true;
  aob.disabled = true;
  htb.disabled = true;
  atb.disabled = true;
}

function gameReset() {
  let hob = document.getElementById(`plusOneBtnHome`)
  let aob = document.getElementById(`plusOneBtnAway`)
  let htb = document.getElementById(`plusThreeBtnHome`)
  let atb = document.getElementById(`plusThreeBtnAway`)

  hob.disabled = false;
  aob.disabled = false;
  htb.disabled = false;
  atb.disabled = false;

  homeScore = 0
  awayScore = 0

  displayScore()
}
