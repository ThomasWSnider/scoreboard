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
  if (homeScore > 0) {
    homeScore--
  }
  displayScore()
}

function awayPenalty() {
  if (awayScore > 0) {
    awayScore--
  }
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

  if (homeScore >= 21) {
    gameOver()
    setTimeout(homeWins, 100)
  }
  else if (awayScore >= 21) {
    gameOver()
    setTimeout(awayWins, 100)
  }

}

function gameOver() {
  let hob = document.getElementById(`plusOneBtnHome`)
  let aob = document.getElementById(`plusOneBtnAway`)
  let htb = document.getElementById(`plusThreeBtnHome`)
  let atb = document.getElementById(`plusThreeBtnAway`)
  let hb = document.getElementById(`homeBtn`)
  let ab = document.getElementById(`awayBtn`)

  hob.disabled = true;
  aob.disabled = true;
  htb.disabled = true;
  atb.disabled = true;
  hb.disabled = true;
  ab.disabled = true;
}

function gameReset() {
  let hob = document.getElementById(`plusOneBtnHome`)
  let aob = document.getElementById(`plusOneBtnAway`)
  let htb = document.getElementById(`plusThreeBtnHome`)
  let atb = document.getElementById(`plusThreeBtnAway`)
  let hb = document.getElementById(`homeBtn`)
  let ab = document.getElementById(`awayBtn`)

  hob.disabled = false;
  aob.disabled = false;
  htb.disabled = false;
  atb.disabled = false;
  hb.disabled = false;
  ab.disabled = false;

  homeScore = 0
  awayScore = 0

  displayScore()
}

function homeWins() {
  window.alert(`Home team wins! Press the Reset Button to play again!`);
}

function awayWins() {
  window.alert(`Away team wins! Press the Reseet Button to play again!`);
}