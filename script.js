document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("DOMContentLoaded", () => {
    const themeBtn = document.querySelector(".themebutton");

    if (themeBtn) {
      themeBtn.addEventListener("click", () => {
        // Toggle the class on the body
        document.body.classList.toggle("dark-mode");

        // Change the button text based on the mode
        if (document.body.classList.contains("dark-mode")) {
          themeBtn.value = "light theme";
        } else {
          themeBtn.value = "dark theme";
        }
      });
    }
  });
  // --- 1. Dark/Light Theme Toggle ---
  // Target the button present in all headers[cite: 1, 3, 6]
  const themeBtn = document.querySelector(".themebutton");

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");

      // Toggle button text based on current state
      if (document.body.classList.contains("dark-mode")) {
        themeBtn.value = "light theme";
      } else {
        themeBtn.value = "dark theme";
      }
    });
  }

  // --- 2. Search Functionality (Home Page) ---
  // Filters books in the grid based on title or author[cite: 6]
  const searchBtn = document.getElementById("searchBtn");
  const searchInput = document.getElementById("searchInput");
  const books = document.querySelectorAll(".book-card");

  if (searchBtn && searchInput) {
    searchBtn.addEventListener("click", () => {
      const query = searchInput.value.toLowerCase();

      books.forEach((book) => {
        const title = book.querySelector("h3").innerText.toLowerCase();
        const author = book.querySelector(".author").innerText.toLowerCase();

        if (title.includes(query) || author.includes(query)) {
          book.style.display = "flex"; // Show matching books
        } else {
          book.style.display = "none"; // Hide non-matching books
        }
      });
    });
  }

  // --- 3. Add to Cart Feedback ---
  // Provides an alert when a user adds a book[cite: 6]
  const addButtons = document.querySelectorAll(".btn-add");

  addButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const bookTitle = e.target.parentElement.querySelector("h3").innerText;
      alert(`"${bookTitle}" has been added to your cart!`);
    });
  });

  // --- 4. Payment Logic (Cart Page) ---
  // Simulates a payment process on the cart page
  const payBtn = document.querySelector(".pay-btn");

  if (payBtn) {
    payBtn.addEventListener("click", () => {
      const cardName = document.querySelector(
        'input[placeholder="Card Name"]',
      ).value;
      if (cardName === "") {
        alert("Please enter your card details.");
      } else {
        alert(`Thank you, ${cardName}! Your payment was successful.`);
      }
    });
  }

  // --- 5. Contact Form Handling ---
  // Prevents page reload and clears form after "sending"[cite: 4]
  const contactForm = document.querySelector(".contactform form");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault(); // Stop page refresh
      alert("Message sent! We will contact you shortly.");
      contactForm.reset();
    });
  }
});
