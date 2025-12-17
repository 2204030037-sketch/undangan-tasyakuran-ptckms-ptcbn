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