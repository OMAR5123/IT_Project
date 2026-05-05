$(document).ready(function () {

  // HELPER FUNCTIONS
  function showError(inputId, message) {
    $("#" + inputId).addClass("input-error");
    $("#" + inputId + "-error").text(message).show();
  }
  function clearError(inputId) {
    $("#" + inputId).removeClass("input-error");
    $("#" + inputId + "-error").text("").hide();
  }

  // ── LOGIN FORM ──
  $("#loginForm").submit(function (e) {
    e.preventDefault();
    let isValid = true;
    clearError("userName"); clearError("password");

    const username = $("#userName").val().trim();
    const password = $("#password").val().trim();

    if (username === "") { showError("userName", "❌ Username is required."); isValid = false; }
    else if (username.length < 3) { showError("userName", "❌ Min 3 characters."); isValid = false; }

    if (password === "") { showError("password", "❌ Password is required."); isValid = false; }
    else if (password.length < 6) { showError("password", "❌ Min 6 characters."); isValid = false; }

    if (isValid) $("#login-success").text("✅ Logged in successfully!").show();
  });

  // ── REGISTER FORM ──
  $("#register").submit(function (e) {
    e.preventDefault();
    let isValid = true;
    clearError("userName-sign"); clearError("email");
    clearError("date"); clearError("password-sign"); clearError("confirm-password");

    const name     = $("#userName-sign").val().trim();
    const email    = $("#email").val().trim();
    const date     = $("#date").val();
    const password = $("#password-sign").val().trim();
    const confirm  = $("#confirm-password").val().trim();
    const gender   = $("input[name='gender']:checked").val();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "")          { showError("userName-sign", "❌ Name is required."); isValid = false; }
    else if (name.length < 3) { showError("userName-sign", "❌ Min 3 characters."); isValid = false; }

    if (email === "")                { showError("email", "❌ Email is required."); isValid = false; }
    else if (!emailRegex.test(email)){ showError("email", "❌ Invalid email format."); isValid = false; }

    if (date === "") { showError("date", "❌ Date of birth is required."); isValid = false; }

    if (!gender) { $("#gender-error").text("❌ Please select a gender.").show(); isValid = false; }
    else         { $("#gender-error").hide(); }

    if (password === "")          { showError("password-sign", "❌ Password is required."); isValid = false; }
    else if (password.length < 6) { showError("password-sign", "❌ Min 6 characters."); isValid = false; }
    else if (!/[A-Z]/.test(password)) { showError("password-sign", "❌ Must have 1 uppercase letter."); isValid = false; }

    if (confirm === "")          { showError("confirm-password", "❌ Please confirm password."); isValid = false; }
    else if (confirm !== password){ showError("confirm-password", "❌ Passwords do not match."); isValid = false; }

    if (isValid) $("#register-success").text("✅ Account created successfully!").show();
  });

  // ── CONTACT FORM ──
  $("#contactForm").submit(function (e) {
    e.preventDefault();
    let isValid = true;
    clearError("contactName"); clearError("contactEmail");
    clearError("contactPhone"); clearError("contactMessage");

    const name    = $("#contactName").val().trim();
    const email   = $("#contactEmail").val().trim();
    const phone   = $("#contactPhone").val().trim();
    const message = $("#contactMessage").val().trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "")   { showError("contactName", "❌ Name is required."); isValid = false; }
    if (email === "")  { showError("contactEmail", "❌ Email is required."); isValid = false; }
    else if (!emailRegex.test(email)) { showError("contactEmail", "❌ Invalid email."); isValid = false; }
    if (phone === "")  { showError("contactPhone", "❌ Phone is required."); isValid = false; }
    if (message === "") { showError("contactMessage", "❌ Message is required."); isValid = false; }

    if (isValid) $("#contact-success").show();
  });

  // ── PAYMENT FORM ──
  $("#paymentForm").submit(function (e) {
    e.preventDefault();
    let isValid = true;
    clearError("cardName"); clearError("cardNumber");
    clearError("expiry"); clearError("cvv");

    const cardName   = $("#cardName").val().trim();
    const cardNumber = $("#cardNumber").val().trim();
    const expiry     = $("#expiry").val().trim();
    const cvv        = $("#cvv").val().trim();

    if (cardName === "") { showError("cardName", "❌ Cardholder name is required."); isValid = false; }
    if (!/^\d{16}$/.test(cardNumber)) { showError("cardNumber", "❌ Must be 16 digits."); isValid = false; }
    if (!/^\d{2}\/\d{2}$/.test(expiry)) { showError("expiry", "❌ Format: MM/YY"); isValid = false; }
    if (!/^\d{3}$/.test(cvv)) { showError("cvv", "❌ Must be 3 digits."); isValid = false; }

    if (isValid) $("#pay-success").show();
  });

  // Clear errors on input
  $("input, textarea").on("input", function () {
    const id = $(this).attr("id");
    if (id) clearError(id);
  });

});
