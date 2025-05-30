const openModalBtn = document.getElementById("openModalBtn");
const modal = document.getElementById("bookingModal");
const closeModalBtn = document.getElementById("closeModalBtn");

openModalBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "block";
});

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
