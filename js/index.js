document.querySelectorAll("#year").forEach(function (element) {
  element.textContent = new Date().getFullYear();
});

const contactForm = document.querySelector("#contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }
    const status = document.querySelector("#form-status");
    status.textContent = "Thank you! Your message is ready to be sent.";
    contactForm.reset();
  });
}

const newsletterForm = document.querySelector("#newsletter-form");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!newsletterForm.checkValidity()) {
      newsletterForm.reportValidity();
      return;
    }
    document.querySelector("#newsletter-status").textContent =
      "Newsletter sign-up is not connected yet. Email us to join.";
  });
}