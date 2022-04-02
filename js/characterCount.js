let credentialsCount = document.querySelector(".CredentialsInputBox");

credentialsCount.addEventListener("input", () => {
  document.querySelector("#currentCredentialsCount").innerHTML =
    document.signUpForm.credentials.value.length;
});

let areaOfFocusInput = document.querySelector(".AreaOfFocusInput");

areaOfFocusInput.addEventListener("input", () => {
  document.querySelector("#currentareaOfFocusInputsCount").innerHTML =
    document.signUpForm.areaOfFocus.value.length;
});

let feedbackToTulipInput = document.querySelector(".FeedbackToTulipInput");

feedbackToTulipInput.addEventListener("input", () => {
  document.querySelector("#currentFeedbackToTulipInputCount").innerHTML =
    document.signUpForm.feedbackToTulip.value.length;
});
