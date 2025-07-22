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

loginBtn.addEventListener('click', () => auth.signInWithPopup(provider));
logoutBtn.addEventListener('click', () => auth.signOut());
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
    loadLeaderboard();
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
  });
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
    });
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
  });
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
    const distance = Math.hypot(lat - targetLat, lon - targetLon);
    if (distance < 0.05) { // ~5km
      resultEl.textContent = 'You found the spot! +10 points';
      if (auth.currentUser) updateScore(auth.currentUser.uid, 10);
    } else {
      resultEl.textContent = 'Not quite there. Keep looking!';
    }
  }, err => {
    resultEl.textContent = 'Error obtaining location.';
  });
}
