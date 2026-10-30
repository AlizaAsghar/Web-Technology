const searchBox = document.getElementById("search");
const grid = document.getElementById("product-grid");
const noResults = document.getElementById("no-results");
const cards = document.querySelectorAll("#product-grid .col");
const radios = document.querySelectorAll('input[name="category"]');

function updateProducts() {
  const text = searchBox.value.trim().toLowerCase();

  cards.forEach(function (card) {
    const name = card.querySelector(".card-title").textContent.toLowerCase();
    const matches = name.includes(text);
    card.classList.toggle("d-none", !matches);
  });

  let visible = 0;
  cards.forEach(function (card) {
    if (getComputedStyle(card).display !== "none") {
      visible++;
    }
  });

  grid.hidden = visible === 0;
  noResults.hidden = visible > 0;
}

searchBox.addEventListener("input", updateProducts);

radios.forEach(function (radio) {
  radio.addEventListener("change", updateProducts);
});

// PRICE SORTING

const sortBtn = document.getElementById("sort-btn");
let ascending = true;

function getPrice(card) {
  const text = card.querySelector(".card-text").textContent;
  return Number(text.replace(/[^0-9]/g, ""));
}

sortBtn.addEventListener("click", function () {
  const sorted = Array.from(grid.children).sort(function (a, b) {
    if (ascending) {
      return getPrice(a) - getPrice(b);
    }
    return getPrice(b) - getPrice(a);
  });

  sorted.forEach(function (card) {
    grid.appendChild(card);
  });

  sortBtn.textContent = ascending
    ? "Sort by price: low to high"
    : "Sort by price: high to low";

  ascending = !ascending;
});

// PREMIUM LABELS
const PREMIUM_PRICE = 1600; // N x 100, with N = 16

cards.forEach(function (card) {
  if (getPrice(card) > PREMIUM_PRICE) {
    const badge = document.createElement("span");
    badge.className = "premium-badge";
    badge.textContent = "Premium";
    card.querySelector(".card").appendChild(badge);
  }
});