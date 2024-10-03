console.log("hello world");

const myName = "Izah Michael";
const h1 = document.querySelector(".heading_primary");
console.log(myName);
console.log(h1);

h1.addEventListener("click", function () {
  h1.textContent = myName;
  h1.computedStyleMap.backgroundColor = "red";
  h1.computedStyleMap.padding = "5rem";
});

const yearEL = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEL.textContent = currentYear;

// make mobile navigation work

const btnNavEl = document.querySelector(".btn_mobile_nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav_open");
});

// make mobile navigation works

// sticky navigation

const sectionHeroEl = document.querySelector(".section_hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // in the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px"
  }
);
obs.observe(sectionHeroEl);
// sticky navigation

////////////////////////////////////////
// Smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // scroll back to the top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    // scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // close mobile navigation
    if (link.classList.contains("main_nav_link")) {
      headerEl.classList.toggle("nav_open");
    }
  });
});

// fixing flexbox gap property missing in some safari versions

function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no_flexbox_gap");
}

checkFlexGap();
// fixing flexbox gap property missing in some safari versions

// Get all accordion items
const accordionItems = document.querySelectorAll(".accordion .item");

// Loop through each item and add click event listener
accordionItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Remove 'open' class from all items
    accordionItems.forEach((i) => i.classList.remove("open"));

    // Add 'open' class to the clicked item
    item.classList.toggle("open");
  });
});
