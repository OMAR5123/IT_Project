document.addEventListener("DOMContentLoaded", () => {
  // ── THEME TOGGLE ──
  const themeBtn = document.querySelector(".themebutton");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      themeBtn.value = document.body.classList.contains("dark-mode")
        ? "☀️ Light Theme"
        : "🌙 Dark Theme";
    });
  }

  // ── SEARCH (index page) ──
  const searchBtn = document.getElementById("searchBtn");
  const searchInput = document.getElementById("searchInput");
  const books = document.querySelectorAll(".book-card");

  if (searchBtn && searchInput) {
    searchBtn.addEventListener("click", () => {
      const query = searchInput.value.toLowerCase();
      books.forEach((book) => {
        const title = book.querySelector("h3")?.innerText.toLowerCase() || "";
        const author =
          book.querySelector(".author")?.innerText.toLowerCase() || "";
        book.style.display =
          title.includes(query) || author.includes(query) ? "flex" : "none";
      });
    });

    // search on Enter key
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") searchBtn.click();
    });
  }

  // ── GRID / LIST VIEW TOGGLE ──
  const gridBtn = document.getElementById("gridViewBtn");
  const listBtn = document.getElementById("listViewBtn");
  const booksContainer = document.getElementById("booksContainer");

  if (gridBtn && listBtn && booksContainer) {
    gridBtn.addEventListener("click", () => {
      booksContainer.classList.remove("list-view");
      booksContainer.classList.add("grid-view");
    });
    listBtn.addEventListener("click", () => {
      booksContainer.classList.remove("grid-view");
      booksContainer.classList.add("list-view");
    });
  }
});

const form = document.getElementById("bookForm");
form.onsubmit = (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const msg = document.getElementById("msg").value;
  let ok = true;

  if (title.length < 2) {
    document.getElementById("titleErr").style.display = "block";
    ok = false;
  } else document.getElementById("titleErr").style.display = "none";

  if (msg.length < 5) {
    document.getElementById("msgErr").style.display = "block";
    ok = false;
  } else document.getElementById("msgErr").style.display = "none";

  if (ok) {
    const div = document.createElement("div");
    div.className = "review-card";
    div.innerHTML = `<h4>${title}</h4><p>${msg}</p>`;
    document.getElementById("reviewList").prepend(div);
    form.reset();
  }
};
