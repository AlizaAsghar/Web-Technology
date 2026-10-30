Name: aliza asghar
Roll number:fa24-bcs-016
N = 16
BP = 616px
H = 112
K = 4

## Files changed

| File | Change |
|---|---|
| `index.html` | Task 1: category tags and radio buttons. Task 3: search box, sort button, "No products found" message and the script link. |
| `product.html` | Task 2: rebuilt the layout as a CSS Grid with named areas, added a quantity input and a long description. |
| `style.css` | Task 1: accent colour variable, filter hiding rule, radio styling. Task 2: grid areas, media query and sticky box. Task 3: search box width and Premium label style. |
| `script.js` (new) | Task 3: live search, price sort and Premium labels. |

## Task 1: CSS-only category filter

- Added a `data-category` attribute to each product column in `index.html` (K = 4 categories: cards, planners, holders, pens), and five radio buttons above the grid (All plus one per category) with "All" checked on load.
- In `style.css`, a rule using `:has()` and `:checked` sets `display: none` on every column that doesn't match the selected radio. I hid the column and not the card, so the grid closes up with no gaps.
- The selected option is highlighted with the accent colour `hsl(112, 70%, 45%)`, stored in the `--accent` variable. No JavaScript is used.

## Task 2: Product page layout with a sticky details box

- Replaced the Bootstrap row and columns in `product.html` with a CSS Grid (`.product-layout`) that uses named `grid-template-areas`: image, details and description.
- Below 616px (BP) it is one column: image, details, description. From 616px up it is two columns (image and details side by side) and the description spans the full width underneath. I used a media query because Bootstrap's breakpoints don't include 616px.
- From 616px up, `.product-details` is `position: sticky` with `top: 86px` (N mod 40 + 70 = 86) and `align-self: start`, so it can slide while the page scrolls. I also added a quantity input and a long description so the sticky effect is visible.

## Task 3: Live search, price sort and Premium labels

- Added `script.js`, linked at the end of `index.html`. It works with the existing cards and does not rebuild them.
- Live search: on every `input` event it hides cards whose name doesn't contain the typed text (not case-sensitive) by toggling Bootstrap's `d-none` class. The category filter hides with CSS and the search hides with `d-none`, so a card shows only if it matches both. If no card is visible, the grid is hidden and "No products found" shows instead.
- Price sort: the button reads each price from the card's `.card-text`, strips non-digits with a regular expression, converts it with `Number()`, sorts an array copy of the cards and moves the existing elements back with `appendChild`. A boolean flips on every click, so it goes low to high, then high to low.
- Premium labels: on page load the script adds a `span` labelled "Premium" to every card priced above N × 100 = 1600. Because the cheapest product is Rs. 2,400, all cards are labelled.

## AI tools used

Claude (Anthropic) was used to explain the concepts and review the code.
