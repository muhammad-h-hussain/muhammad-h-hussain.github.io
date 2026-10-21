/* Small interactions only. All content lives in index.html and works without this file. */
(function () {
  "use strict";

  // Mobile menu
  var toggle = document.querySelector(".nav-toggle");
  var list = document.getElementById("nav-list");
  if (toggle && list) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      list.classList.toggle("open", !open);
    });
    list.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        toggle.setAttribute("aria-expanded", "false");
        list.classList.remove("open");
      }
    });
  }

  // Theme toggle: follows the system setting until the visitor chooses
  var themeBtn = document.querySelector(".theme-toggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var root = document.documentElement;
      var current = root.getAttribute("data-theme") ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      var next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  // Project filters (hidden without JavaScript, when every card simply shows)
  var filters = document.querySelector(".filters");
  var cards = Array.prototype.slice.call(document.querySelectorAll(".card[data-category]"));
  var count = document.getElementById("project-count");
  if (filters && cards.length) {
    var buttons = Array.prototype.slice.call(filters.querySelectorAll(".filter"));
    filters.hidden = false;
    buttons.forEach(function (b) {
      b.addEventListener("click", function () {
        var cat = b.getAttribute("data-cat");
        var shown = 0;
        cards.forEach(function (card) {
          var match = cat === "All" || card.getAttribute("data-category") === cat;
          card.hidden = !match;
          if (match) shown++;
        });
        buttons.forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); });
        if (count) count.textContent = "Showing " + shown + " of " + cards.length + " projects";
      });
    });
  }

  // Lists any placeholders still to fill in (open the browser console to see them)
  var left = document.querySelectorAll("mark.ph");
  var links = document.querySelectorAll('a[href*="REPLACE-WITH"]');
  if ((left.length || links.length) && window.console) {
    console.info("Placeholders still to fill in index.html: " + left.length + " text, " + links.length + " links");
  }
})();
