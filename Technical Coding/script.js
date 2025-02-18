const motivasi = ["Terus Berjuang", "jangan pernah menyerah", "Bangkit berdiri dan jadilah Terang"];

function generatemotivasi() {
  const randomIndex = Math.floor(Math.random() * motivasi.length);
  document.getElementById("Motivasi").innerText = motivasi[randomIndex];
}
