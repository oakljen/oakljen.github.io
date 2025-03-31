import React, { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  onValue,
  set,
  update,
  get,
} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCNl5p6JQiGn93mGmHDHvbyoSKQnLQy8H8",
  authDomain: "bingo-41a8c.firebaseapp.com",
  databaseURL: "https://bingo-41a8c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "bingo-41a8c",
  storageBucket: "bingo-41a8c.firebasestorage.app",
  messagingSenderId: "221955480686",
  appId: "1:221955480686:web:ced9856a54bdf8130f5a7f"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const actions = [
  "Said 'literally'",
  "Sent a GIF",
  "Talked about coffee",
  "Used a buzzword",
  "Made a typo",
  "Reacted with 🔥",
  "Forgot to unmute",
  "Quoted a meme",
  "Wore a hoodie",
  "Mentioned AI",
  "Missed a deadline",
  "Double messaged",
  "Spoke in third person",
  "Mentioned dogs",
  "Talked about weather",
  "Overused emojis",
  "Wrote LOL",
  "Used Comic Sans",
  "Shared a selfie",
  "Said 'vibe'",
  "Went off-topic",
  "Muted mic too late",
  "Mic peaked",
  "Said 'bruh'",
  "Asked about lunch",
];

const shuffleArray = (array) => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

export default function BingoGame() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [players, setPlayers] = useState({});
  const [viewingPlayer, setViewingPlayer] = useState(null);
  const [error, setError] = useState("");
  const [adminMode, setAdminMode] = useState(false);

  const [newUser, setNewUser] = useState("");
  const [newPass, setNewPass] = useState("");

  useEffect(() => {
    const cachedUser = localStorage.getItem("bingo_user");
    const cachedPass = localStorage.getItem("bingo_pass");
    if (cachedUser && cachedPass) {
      loginUser(cachedUser, cachedPass);
    }
  }, []);

  useEffect(() => {
    const usersRef = ref(db, "users");
    return onValue(usersRef, (snapshot) => {
      setPlayers(snapshot.val() || {});
    });
  }, []);

  const loginUser = async (name, pass) => {
    const userRef = ref(db, `users/${name}`);
    const snap = await get(userRef);
    if (!snap.exists()) {
      setError("User not found");
      return;
    }
    const data = snap.val();
    if (data.password !== pass) {
      setError("Incorrect password");
      return;
    }
    setUser({ name, ...data });
    setViewingPlayer(name);
    localStorage.setItem("bingo_user", name);
    localStorage.setItem("bingo_pass", pass);
    setAdminMode(name === "admin");
  };

  const handleLogin = () => {
    loginUser(username, password);
  };

  const handleSquareClick = (index) => {
    if (!user) return;
    const updatedChecked = [...user.checked];
    updatedChecked[index] = !updatedChecked[index];
    update(ref(db, `users/${user.name}`), { checked: updatedChecked });
    setUser({ ...user, checked: updatedChecked });
  };

  const handleCreateUser = async () => {
    if (!newUser || !newPass) return;
    const board = shuffleArray(actions).slice(0, 25);
    const checked = Array(25).fill(false);
    await set(ref(db, `users/${newUser}`), {
      password: newPass,
      board,
      checked,
    });
    setNewUser("");
    setNewPass("");
  };

  const current = players[viewingPlayer || user?.name];

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-purple-200 p-6">
        <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
          <h1 className="text-3xl font-bold mb-6 text-center">Login to Bingo</h1>
          <input
            className="w-full mb-3 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="w-full mb-3 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg font-semibold"
            onClick={handleLogin}
          >
            Login
          </button>
          {error && <p className="text-red-500 mt-3 text-center">{error}</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-xl">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Welcome, {user.name}</h1>

        {adminMode && (
          <div className="mb-6 p-4 border rounded bg-blue-50">
            <h2 className="font-bold mb-2 text-blue-800">Admin: Create New Player</h2>
            <input
              className="w-full mb-2 p-2 border rounded"
              type="text"
              placeholder="New username"
              value={newUser}
              onChange={(e) => setNewUser(e.target.value)}
            />
            <input
              className="w-full mb-2 p-2 border rounded"
              type="password"
              placeholder="New password"
              value={newPass}
              onChange={(e) => setNewPass(e.target.value)}
            />
            <button
              className="w-full bg-green-500 hover:bg-green-600 text-white p-2 rounded"
              onClick={handleCreateUser}
            >
              Add Player
            </button>
          </div>
        )}

        <div className="mb-4">
          <label className="block mb-1 font-semibold">View another player:</label>
          <select
            value={viewingPlayer || user.name}
            onChange={(e) => setViewingPlayer(e.target.value)}
            className="w-full p-2 border rounded"
          >
            {Object.keys(players).map((id) => (
              <option key={id} value={id}>
                {id === user.name ? "You" : id}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-5 gap-2">
          {current?.board?.map((item, i) => (
            <button
              key={i}
              className={`p-2 text-sm border rounded h-24 flex items-center justify-center text-center leading-tight ${
                current.checked?.[i] ? "bg-green-400 text-white" : "bg-white"
              } ${
                viewingPlayer && viewingPlayer !== user.name
                  ? "cursor-not-allowed"
                  : "cursor-pointer hover:bg-blue-100"
              }`}
              onClick={() => viewingPlayer === user.name && handleSquareClick(i)}
              disabled={viewingPlayer !== user.name}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
