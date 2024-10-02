if (
  document.location.pathname == "/yu/init" ||
  document.location.pathname.startsWith("/yu/ui/home.faces")
) {
  // make it repsonsive
  const viewportMetaElement = document.createElement("meta");
  viewportMetaElement.name = "viewport";
  viewportMetaElement.content = "width=device-width, initial-scale=1.0";
  document.head.appendChild(viewportMetaElement);

  // remove the top images
  document
    .querySelector("#container")
    .querySelector("#data")
    .querySelector("#top")
    .remove();

  // remove the university text
  document
    .querySelector("#container")
    .querySelector("#left")
    .querySelector("#homeTxt")
    .remove();

  // remove the vote box
  document.querySelector("#login-vote").querySelector("#vote").remove();

  // remove the news box
  document
    .querySelector("#container")
    .querySelector("#left")
    .querySelector(".news")
    .remove();

  // remove the login form text
  document.querySelector("#loginForm").querySelector("#home2Txt").remove();

  // remove the need for user type selection
  const loginForm = document.querySelector("#loginForm");
  loginForm.querySelector("#login_type").remove();

  const loginTypeHidden = document.createElement("input");
  loginTypeHidden.hidden = true;
  loginTypeHidden.id = "userType";
  loginTypeHidden.name = "userType";
  loginForm.appendChild(loginTypeHidden);

  const usernameField = loginForm.querySelector("#username");
  usernameField.addEventListener("input", (e) => {
    if (usernameField.value.length <= 4) {
      // userType -> 14 -> faculty member
      loginTypeHidden.value = "14";
    } else {
      // userType -> 1 -> student
      loginTypeHidden.value = "1";
    }
  });

  // remove and enhance login button
  const loginButton = document
    .querySelector("#container")
    .querySelector("#data")
    .querySelector("#left")
    .querySelector("#login-vote")
    .querySelector("#login")
    .querySelector("#loginForm")
    .querySelector("#loginButton");
  loginButton.innerHTML = loginButton.title;
}
