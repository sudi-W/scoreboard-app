const homeEl = document.getElementById('home-score');
const guestEl = document.getElementById('guest-score');
let score = 0;

function addToScore(team, points) {
  if (team === 'home') {
    score += points;
    homeEl.textContent = `Score: ${score}`;
  } else if (team === 'guest') {
    score += points;
    guestEl.textContent = `Score: ${score}`;
  }
}

function resetScore(team) {
  score = 0;
  if (team === 'home') {
    homeEl.textContent = `Score: ${score}`;
  } else if (team === 'guest') {
    guestEl.textContent = `Score: ${score}`;
  }
}
