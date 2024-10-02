setupFonts();
setupTheme();
setupLogo();

function setupFonts() {
  const link1 = document.createElement("link");
  link1.rel = "preconnect";
  link1.href = "https://fonts.googleapis.com";

  const link2 = document.createElement("link");
  link2.rel = "preconnect";
  link2.href = "https://fonts.gstatic.com";
  link2.crossOrigin = "anonymous";

  const link3 = document.createElement("link");
  link3.rel = "stylesheet";
  link3.href =
    "https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&display=swap";

  document.head.appendChild(link1);
  document.head.appendChild(link2);
  document.head.appendChild(link3);
}

function setupTheme() {
  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
  }

  setTheme("dark");
  // setTheme("light"); // Switch to light theme
}

function setupLogo() {
  const logoElement = document
    .querySelector("#container")
    .querySelector("#all")
    .querySelector("#top")
    .querySelector(".logo");

  logoElement.innerHTML = "";

  fetch(chrome.runtime.getURL("assets/yulogo.svg"))
    .then((response) => response.text())
    .then((svgText) => {
      logoElement.innerHTML = svgText;

      // const svgElement = logoElement.querySelector("svg");
    })
    .catch((error) => console.error("Error fetching SVG:", error));
}
