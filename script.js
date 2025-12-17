function buka() {
  document.getElementById("cover").style.display = "none";
  document.getElementById("surat").style.display = "block";
}

// ambil nama dari URL
const params = new URLSearchParams(window.location.search);
const nama = params.get("to");

if (nama) {
  document.getElementById("tujuan").innerText = nama;
}

const music = document.getElementById("bgMusic");
let isPlaying = false;

function buka() {
  document.getElementById("cover").style.display = "none";
  document.getElementById("surat").style.display = "block";

  music.play();
  isPlaying = true;
}

function toggleMusic() {
  if (isPlaying) {
    music.pause();
    isPlaying = false;
  } else {
    music.play();
    isPlaying = true;
  }
}

music.volume = 0;
music.play();
let vol = 0;
let fade = setInterval(() => {
  if (vol < 1) {
    vol += 0.05;
    music.volume = vol;
  } else {
    clearInterval(fade);
  }
}, 200);

function toggleMusic() {
  const btn = document.querySelector(".music-btn");
  if (isPlaying) {
    music.pause();
    isPlaying = false;
    btn.textContent = "🔇";
  } else {
    music.play();
    isPlaying = true;
    btn.textContent = "🔊";
  }
}
