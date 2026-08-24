document.getElementById("year").textContent = new Date().getFullYear();

// Email modal functionality
const emailModal = document.getElementById("emailModal");
const emailBtn1 = document.getElementById("emailBtn1");
const emailBtn2 = document.getElementById("emailBtn2");
const closeBtn = document.querySelector(".modal-close");
const copyBtn = document.getElementById("copyBtn");
const emailText = document.getElementById("emailText");
const copyFeedback = document.getElementById("copyFeedback");

// Open modal
emailBtn1.addEventListener("click", openEmailModal);
emailBtn2.addEventListener("click", openEmailModal);

function openEmailModal() {
  emailModal.style.display = "block";
  copyFeedback.textContent = "";
}

// Close modal
closeBtn.addEventListener("click", closeEmailModal);
window.addEventListener("click", function (event) {
  if (event.target === emailModal) {
    closeEmailModal();
  }
});

function closeEmailModal() {
  emailModal.style.display = "none";
}

// Copy email to clipboard
copyBtn.addEventListener("click", function () {
  const email = emailText.textContent;
  navigator.clipboard.writeText(email).then(() => {
    copyFeedback.textContent = "✓ Email copied to clipboard!";
    copyFeedback.style.color = "#4CAF50";
    setTimeout(() => {
      copyFeedback.textContent = "";
    }, 2000);
  }).catch(() => {
    copyFeedback.textContent = "Failed to copy. Try again.";
    copyFeedback.style.color = "#f44336";
  });
});