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

function displayScore() {
  let homeTeamElement = document.getElementById('homeScore')
  let awayTeamElement = document.getElementById('awayScore')

  homeTeamElement.innerText = `homeScore`
  awayTeamElement.innerText = `awayScore`

}