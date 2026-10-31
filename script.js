
// Accounts Receivable Dashboard
// Small interactive enhancements

document.addEventListener("DOMContentLoaded", function () {

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
      const target = document.querySelector(this.getAttribute("href"));

      if (target) {
        event.preventDefault();
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

  // Display a message when the Excel workbook download is clicked
  const downloadLink = document.querySelector(".download-section a");

  if (downloadLink) {
    downloadLink.addEventListener("click", function () {
      console.log("Accounts Receivable workbook download initiated.");
    });
  }

});
