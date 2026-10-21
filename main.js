/* Renders content.js into the page. You should not need to edit this file to change content. */
(function () {
  "use strict";

  var C = window.SITE_CONTENT;
  if (!C) return;

  var PLACEHOLDER = /(\[[^\]]+\])/;
  var IS_PLACEHOLDER = /^\[[^\]]+\]$/;
  var found = [];

  function isPlaceholder(value) {
    return typeof value === "string" && /^\s*\[[^\]]+\]\s*$/.test(value);
  }

  // Turns text into nodes, wrapping any [placeholder] in a highlighted <mark>.
  function rich(text) {
    var frag = document.createDocumentFragment();
    String(text || "").split(PLACEHOLDER).forEach(function (part) {
      if (!part) return;
      if (IS_PLACEHOLDER.test(part)) {
        var m = document.createElement("mark");
        m.className = "ph";
        m.title = "Placeholder: replace in content.js";
        m.textContent = part;
        frag.appendChild(m);
        found.push(part);
      } else {
        frag.appendChild(document.createTextNode(part));
      }
    });
    return frag;
  }

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        if (k === "text") node.appendChild(rich(attrs[k]));
        else if (k === "className") node.className = attrs[k];
        else node.setAttribute(k, attrs[k]);
      });
    }
    (children || []).forEach(function (c) { if (c) node.appendChild(c); });
    return node;
  }

  function get(path) {
    return path.split(".").reduce(function (o, k) { return o ? o[k] : undefined; }, C);
  }

  function fill(id, nodes) {
    var target = document.getElementById(id);
    if (!target) return;
    target.textContent = "";
    nodes.forEach(function (n) { target.appendChild(n); });
  }

  // Simple bindings: any element with data-bind="section.field"
  document.querySelectorAll("[data-bind]").forEach(function (node) {
    var value = get(node.getAttribute("data-bind"));
    if (value === undefined) return;
    node.textContent = "";
    node.appendChild(rich(value));
  });

  // Meta
  if (C.meta) {
    if (C.meta.title) document.title = C.meta.title;
    var desc = document.querySelector('meta[name="description"]');
    if (desc && C.meta.description) desc.setAttribute("content", C.meta.description);
  }
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Hero buttons
  var p = C.person || {};
  var linkedinBtn = document.getElementById("hero-linkedin");
  if (linkedinBtn && p.linkedin && !isPlaceholder(p.linkedin)) {
    linkedinBtn.href = p.linkedin;
    linkedinBtn.target = "_blank";
  }
  var cvBtn = document.getElementById("hero-cv");
  if (cvBtn && p.cvUrl) {
    cvBtn.href = p.cvUrl;
    cvBtn.hidden = false;
  }

  // At a glance
  fill("glance-list", (C.hero.glance || []).map(function (g) {
    return el("div", null, [el("dt", { text: g.label }), el("dd", { text: g.value })]);
  }));

  // About
  fill("about-body", (C.about.paragraphs || []).map(function (t) { return el("p", { text: t }); }));

  // What I do
  fill("wid-list", (C.whatIDo.items || []).map(function (item, i) {
    return el("article", { className: "pillar" + (i < 2 ? " primary" : "") }, [
      el("p", { className: "pillar-num", text: "0" + (i + 1) }),
      el("h3", { text: item.title }),
      el("p", { className: "lead", text: item.lead }),
      el("ul", null, (item.points || []).map(function (pt) { return el("li", { text: pt }); }))
    ]);
  }));

  // Projects
  var projects = C.projects.items || [];
  var cards = projects.map(function (pr) {
    var card = el("article", { className: "card", "data-category": pr.category }, [
      el("span", { className: "tag", text: pr.category }),
      el("h3", { text: pr.title }),
      el("dl", null, [
        el("dt", { text: "Problem" }), el("dd", { text: pr.problem }),
        el("dt", { text: "What I did" }), el("dd", { text: pr.did }),
        el("dt", { className: "result", text: "Result" }), el("dd", { className: "result-text", text: pr.result })
      ])
    ]);
    return card;
  });
  fill("project-list", cards);

  var count = document.getElementById("project-count");
  var filterBtns = [];
  function applyFilter(cat) {
    var shown = 0;
    cards.forEach(function (card) {
      var match = cat === "All" || card.getAttribute("data-category") === cat;
      card.hidden = !match;
      if (match) shown++;
    });
    filterBtns.forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.cat === cat)); });
    if (count) count.textContent = "Showing " + shown + " of " + cards.length + " projects";
  }
  filterBtns = ["All"].concat(C.projects.categories || []).map(function (cat) {
    var b = el("button", { type: "button", className: "filter", "aria-pressed": "false" });
    b.dataset.cat = cat;
    b.textContent = cat;
    b.addEventListener("click", function () { applyFilter(cat); });
    return b;
  });
  fill("project-filters", filterBtns);
  filterBtns[0].setAttribute("aria-pressed", "true");

  // Experience
  fill("exp-list", (C.experience.items || []).map(function (x) {
    return el("li", null, [
      el("h3", { text: x.role }),
      x.org ? el("p", { className: "org", text: x.org }) : null,
      x.dates ? el("p", { className: "dates", text: x.dates }) : null,
      x.summary ? el("p", { className: "summary", text: x.summary }) : null
    ]);
  }));

  // Skills
  fill("skills-list", (C.skills.groups || []).map(function (g) {
    return el("div", null, [
      el("h3", { text: g.title }),
      el("ul", { className: "chips" }, (g.items || []).map(function (s) { return el("li", { text: s }); }))
    ]);
  }));

  // Certifications
  fill("cert-list", (C.certifications.items || []).map(function (c) {
    return el("li", { className: "cert" }, [
      el("span", { className: "status", text: c.status }),
      el("h3", { text: c.name }),
      el("p", { text: c.issuer }),
      el("p", { className: "detail", text: c.detail })
    ]);
  }));

  // Contact
  function contactRow(label, value, href) {
    var dd = el("dd");
    if (href && !isPlaceholder(value)) {
      var a = el("a", { href: href, text: value });
      if (/^https?:/.test(href)) { a.target = "_blank"; a.rel = "noopener"; }
      dd.appendChild(a);
    } else {
      dd.appendChild(rich(value));
    }
    return el("div", null, [el("dt", { text: label }), dd]);
  }
  fill("contact-list", [
    contactRow("Email", p.email, "mailto:" + p.email),
    contactRow("LinkedIn", p.linkedin, p.linkedin),
    contactRow("Location", p.location),
    contactRow("Availability", p.availability)
  ]);

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

  // Helps you spot anything still to fill in (open the browser console)
  if (found.length && window.console) {
    console.info("Placeholders still to fill in content.js (" + found.length + "):\n" + found.join("\n"));
  }
})();
