const homeEl = document.getElementById('home-score');
const awayEl = document.getElementById('away-score');
let score = 0;

function addToScore(team, points) {
  if (team === 'home') {
    score += points;
    homeEl.textContent = `Score: ${score}`;
  } else if (team === 'away') {
    score += points;
    awayEl.textContent = `Score: ${score}`;
  }
}

function resetScore(team) {
  score = 0;
  if (team === 'home') {
    homeEl.textContent = `Score: ${score}`;
  } else if (team === 'away') {
    awayEl.textContent = `Score: ${score}`;
  }
}
