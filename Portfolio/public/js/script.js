gsap.registerPlugin(ScrollTrigger);

const box1 = document.querySelector(".sec1 .box1");
const box2 = document.querySelector(".sec1 .box2");

gsap.to(box1, {
  xPercent: 500,
  duration: 2,
  scrollTrigger: {
    trigger: box1,
    toggleActions: "restart reverse play reverse",
    start: "top 40%",
    end: "bottom 30%",
    markers: true,
    scrub: 1
  }
});

gsap.to(box2, {
  xPercent: 500,
  duration: 2,
  scrollTrigger: {
    trigger: box1,
    toggleActions: "restart reverse play reverse",
    start: "top 40%",
    end: "bottom 30%",
    scrub: 10
  }
});

gsap.from(".sec2 .box", {
    scrollTrigger : {
        trigger : ".sec2 .box",
        toggleActions : "restart none none reset",
        start : "top 80%",
        markers : false,
    },
    y : 100,
    opacity : 0,
    scale : 0,
    ease : "elastic(0.4,0.15)",
    duration : 1,
    stagger : 0.1,
})

/**
* Utility function to calculate the current theme setting.
* Look for a local storage value.
* Fall back to system setting.
* Fall back to light mode.
*/
function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
  if (localStorageTheme !== null) {
    return localStorageTheme;
  }

  if (systemSettingDark.matches) {
    return "dark";
  }

  return "light";
}

/**
* Utility function to update the button text and aria-label.
*/
function updateButton({ buttonEl, isDark }) {
  const newCta = isDark ? "light" : "dark";
  // use an aria-label if you are omitting text on the button
  // and using a sun/moon icon, for example
  buttonEl.setAttribute("aria-label", newCta);
  buttonEl.innerText = newCta;
}

/**
* Utility function to update the theme setting on the html tag
*/
function updateThemeOnHtmlEl({ theme }) {
  document.querySelector("html").setAttribute("data-theme", theme);
}


/**
* On page load:
*/

/**
* 1. Grab what we need from the DOM and system settings on page load
*/
const button = document.querySelector("[data-theme-toggle]");
const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

/**
* 2. Work out the current site settings
*/
let currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });

/**
* 3. Update the theme setting and button text accoridng to current settings
*/
updateButton({ buttonEl: button, isDark: currentThemeSetting === "dark" });
updateThemeOnHtmlEl({ theme: currentThemeSetting });

/**
* 4. Add an event listener to toggle the theme
*/
button.addEventListener("click", (event) => {
  const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

  localStorage.setItem("theme", newTheme);
  updateButton({ buttonEl: button, isDark: newTheme === "dark" });
  updateThemeOnHtmlEl({ theme: newTheme });

  currentThemeSetting = newTheme;
}); 