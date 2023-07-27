// Use an object to store the scores for 'home' and 'away' teams separately
let scores = {
  home: 0,
  away: 0
};

const homeEl = document.getElementById('home-score');
const awayEl = document.getElementById('away-score');

function addToScore(team, points) {
  // Update the score for the specified team
  scores[team] += points;

  // Update the score display for both 'home' and 'away'
  homeEl.textContent = `Score: ${scores.home}`;
  awayEl.textContent = `Score: ${scores.away}`;
}

function resetScore(team) {
  // Reset the score for the specified team
  scores[team] = 0;

  // Update the score display for both 'home' and 'away'
  homeEl.textContent = `Score: ${scores.home}`;
  awayEl.textContent = `Score: ${scores.away}`;
}
