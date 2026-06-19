// Firebase configuration - replace with your own credentials
const firebaseConfig = {
  apiKey: "AIzaSyDszjPNZDTZBNHc_Vfl5RrRt7ycpnLNBFI",
  authDomain: "location-81172.firebaseapp.com",
  projectId: "location-81172",
  storageBucket: "location-81172.firebasestorage.app",
  messagingSenderId: "199121467881",
  appId: "1:199121467881:web:c8b2569016b1b581a33378"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const userInfo = document.getElementById('user-info');
const checkBtn = document.getElementById('check-location');
const resultEl = document.getElementById('result');
const scoreDisplay = document.getElementById('score-display');
const leaderboard = document.getElementById('leaderboard');

const provider = new firebase.auth.GoogleAuthProvider();

loginBtn.addEventListener('click', () => auth.signInWithPopup(provider).catch(err => console.error('Sign in failed:', err)));
logoutBtn.addEventListener('click', () => auth.signOut().then(() => loadLeaderboard()).catch(err => console.error('Sign out failed:', err)));
checkBtn.addEventListener('click', checkLocation);

// Show leaderboard on initial load
loadLeaderboard();

auth.onAuthStateChanged(user => {
  if (user) {
    userInfo.textContent = `Logged in as ${user.displayName}`;
    loginBtn.style.display = 'none';
    logoutBtn.style.display = 'inline-block';
    checkBtn.style.display = 'inline-block';
    loadScore(user.uid);
  } else {
    userInfo.textContent = '';
    loginBtn.style.display = 'inline-block';
    logoutBtn.style.display = 'none';
    checkBtn.style.display = 'none';
    scoreDisplay.textContent = 'Score: 0';
    leaderboard.innerHTML = '';
  }
});

function loadScore(uid) {
  db.collection('players').doc(uid).get().then(doc => {
    const score = doc.exists ? doc.data().score || 0 : 0;
    scoreDisplay.textContent = `Score: ${score}`;
  }).catch(err => console.error('Load score failed:', err));
}

function loadLeaderboard() {
  db.collection('players')
    .orderBy('score', 'desc')
    .limit(5)
    .get()
    .then(snapshot => {
      leaderboard.innerHTML = '';
      snapshot.forEach(doc => {
        const li = document.createElement('li');
        const data = doc.data();
        li.textContent = `${data.name || 'Anonymous'}: ${data.score || 0}`;
        leaderboard.appendChild(li);
      });
    }).catch(err => console.error('Leaderboard load failed:', err));
}

function updateScore(uid, points) {
  const ref = db.collection('players').doc(uid);
  db.runTransaction(tx => {
    return tx.get(ref).then(doc => {
      const newScore = (doc.exists ? (doc.data().score || 0) : 0) + points;
      const name = auth.currentUser ? auth.currentUser.displayName : 'Anonymous';
      tx.set(ref, {score: newScore, name});
      return newScore;
    });
  }).then(newScore => {
    scoreDisplay.textContent = `Score: ${newScore}`;
    loadLeaderboard();
  }).catch(err => console.error('Score update failed:', err));
}

function haversineDistance(lat1, lon1, lat2, lon2) {
  const R = 6371000;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat/2)**2 + Math.cos(lat1*Math.PI/180) * Math.cos(lat2*Math.PI/180) * Math.sin(dLon/2)**2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

function checkLocation() {
  if (!navigator.geolocation) {
    resultEl.textContent = 'Geolocation not supported';
    return;
  }
  resultEl.textContent = 'Locating...';
  navigator.geolocation.getCurrentPosition(pos => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    // Example location (Golden Gate Bridge)
    const targetLat = 37.8199;
    const targetLon = -122.4783;
    if (haversineDistance(lat, lon, targetLat, targetLon) < 5000) { // 5km in metres
      resultEl.textContent = 'You found the spot! +10 points';
      if (auth.currentUser) updateScore(auth.currentUser.uid, 10);
    } else {
      resultEl.textContent = 'Not quite there. Keep looking!';
    }
  }, err => {
    resultEl.textContent = 'Error obtaining location.';
  });
}
