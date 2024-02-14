function togglePopup(popupId) {
  var popup = document.getElementById(popupId);
  popup.style.display =
    popup.style.display === "none" || popup.style.display === ""
      ? "block"
      : "none";
}

function closeGallery() {
  var popups = document.querySelectorAll(".popup");
  popups.forEach(function (popup) {
    popup.style.display = "none";
  });
}

function handleKeyPress(event) {
  if (event.key === "Escape") {
    closeGallery();
  }
}

document.addEventListener("keydown", handleKeyPress);

document.addEventListener("DOMContentLoaded", function () {
  var currentPage = window.location.href;
  var navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(function (link) {
    if (link.href === currentPage) {
      link.classList.add("active");
    }
  });

  var subHeaderLinks = document.querySelectorAll("#sub-header a");
  subHeaderLinks.forEach(function (link) {
    if (currentPage === link.href) {
      link.closest("li").classList.add("active");
    }
  });
});
