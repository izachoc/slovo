document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("theme-toggle");
  const root = document.documentElement;

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    root.setAttribute("data-theme", savedTheme);
  } else {
    root.setAttribute("data-theme", "light");
  }

  toggleBtn.addEventListener("click", () => {
    const currentTheme = root.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    root.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  });
});

window.setTheme = function (styleName) {
  if (styleName === "default") {
    document.documentElement.removeAttribute("data-theme-style");
    console.log("Skin: Default");
  } else {
    document.documentElement.setAttribute("data-theme-style", styleName);
    console.log(`Skin: ${styleName}`);
  }
};
