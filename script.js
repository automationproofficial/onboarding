document.getElementById("signup-form").addEventListener("submit", function(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  document.getElementById("status-message").innerText = "✅ Email submitted! You’ll receive access shortly.";
  document.getElementById("signup-form").reset();

  // Simulate sending email to your list
  console.log("Email submitted:", email);
});
