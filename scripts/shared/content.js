setupFonts();
setupTheme();
setupLogo();
removeElements();
fixPrintButtonIfItExists();
fixBackButtonIfItExists();
fixNextButtonIfItExists();

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
    ?.querySelector("#container")
    ?.querySelector("#all")
    ?.querySelector("#top")
    ?.querySelector(".logo");
  if (logoElement === null || logoElement === undefined) return;

  logoElement.innerHTML = "";

  fetch(chrome.runtime.getURL("assets/yulogo.svg"))
    .then((response) => response.text())
    .then((svgText) => {
      logoElement.innerHTML = svgText;

      // const svgElement = logoElement.querySelector("svg");
    })
    .catch((error) => console.error("Error fetching SVG:", error));
}

function removeElements() {
  // remove texter (copyright) from footer
  const footerCopyright = document
    ?.querySelector("#footer")
    ?.querySelector(".texter");
  if (footerCopyright === null || footerCopyright === undefined) return;

  footerCopyright.innerHTML = "جميع الحقوق محفوظة جامعة اليمامة © 2024";
}

function fixPrintButtonIfItExists() {
  let printButtons = document?.querySelectorAll(".printButton");
  printButtons.forEach((printButton) => {
    if (printButton === null || printButton === undefined) return;

    if (printButton.title !== null) {
      printButton.innerHTML = printButton.title;
    }
  });
}

function fixBackButtonIfItExists() {
  let backButtons = document?.querySelectorAll(".backButton");
  backButtons.forEach((backButton) => {
    if (backButton === null || backButton === undefined) return;

    backButton.innerHTML =
      backButton.title == null || backButton.title === ""
        ? "رجوع | Back"
        : backButton.title;
  });
}

function fixNextButtonIfItExists() {
  let nextButtons = document?.querySelectorAll(".nextButton");
  nextButtons.forEach((nextButton) => {
    if (nextButton === null || nextButton === undefined) return;

    nextButton.innerHTML =
      nextButton.title == null || nextButton.title === ""
        ? "التالي | Next"
        : nextButton.title;
  });
}
