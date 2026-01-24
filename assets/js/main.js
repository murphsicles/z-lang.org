// assets/js/main.js
document.addEventListener("DOMContentLoaded", () => {
  const codeEl = document.getElementById("code");

  const tokens = [
    {text: "fn", class: "keyword"},
    {text: " main()", class: "function"},
    {text: " {", class: ""},
    {newline: true, delay: 900},
    {text: "    println!", class: "macro"},
    {text: "(", class: ""},
    {text: "\"Hello, Zeta!\"", class: "string"},
    {text: ");", class: ""},
    {newline: true, delay: 1500},
    {text: "}", class: ""},
    {newline: true, delay: 2400},
    {newline: true, delay: 1500},
    {text: "// → ~7 kB static binary", class: "comment"},
    {newline: true, delay: 1500},
    {text: "// Zero-cost abstractions", class: "comment"},
    {newline: true, delay: 1500},
    {text: "// First-principles design", class: "comment"}
  ];

  let tokenIndex = 0;

  function startTyping() {
    codeEl.innerHTML = "";
    tokenIndex = 0;
    typeNext();
  }

  function typeNext() {
    if (tokenIndex >= tokens.length) {
      setTimeout(startTyping, 6000);
      return;
    }

    const token = tokens[tokenIndex];

    if (token.newline) {
      codeEl.innerHTML += "<br>";
    } else {
      codeEl.innerHTML += `<span class="${token.class}">${token.text}</span>`;
    }

    tokenIndex++;

    const delay = token.delay || 210;
    setTimeout(typeNext, delay);
  }

  setTimeout(startTyping, 800);

  // Mobile menu
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  menuToggle?.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", !expanded);
    navMenu.classList.toggle("active");
  });

  document.addEventListener("click", e => {
    if (!navMenu?.contains(e.target) && !menuToggle?.contains(e.target)) {
      navMenu?.classList.remove("active");
      menuToggle?.setAttribute("aria-expanded", "false");
    }
  });
});
