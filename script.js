function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function () {
  var whatsappContainer = document.getElementById("whatsapp-container");

  function showWhatsAppIcon() {
    whatsappContainer.style.display = "flex";

    // Hide the WhatsApp container after 20 seconds
    setTimeout(function () {
      whatsappContainer.style.display = "none";
    }, 20000);
  }

  // Show WhatsApp icon on page load
  showWhatsAppIcon();

  // Add event listeners for interactions (e.g., scroll, click)
  window.addEventListener("scroll", showWhatsAppIcon);
  document.addEventListener("click", showWhatsAppIcon);
});
