document.querySelector("#myVideo").playbackRate = 0.5;

// Defining a function to display error message
function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}

function ValidateFirstName() {
  let firstName = document.signUpForm.firstName.value;
  let nameErr = true;

  if (firstName == "") {
    printError("firstNameErr", "Please enter your name");
  } else {
    let regex = /^[a-zA-Z\s]+$/;
    if (regex.test(firstName) === false) {
      printError("firstNameErr", "please enter a valid name");
    } else {
      printError("firstNameErr", "");
      nameErr = false;
    }
  }
}

function ValidateLastName() {
  let lastName = document.signUpForm.lastName.value;
  let nameErr = true;

  if (lastName == "") {
    printError("lastNameErr", "Please enter your last name");
  } else {
    let regex = /^[a-zA-Z\s]+$/;
    if (regex.test(lastName) === false) {
      printError("lastNameErr", "please enter a valid last name");
    } else {
      printError("lastNameErr", "");
      nameErr = false;
    }
  }
}

function ValidateSuffix() {
  let suffix = document.signUpForm.suffix.value;
  let suffixErr = true;

  if (suffix == "none") {
    printError("suffixError", "Please select a suffix");
  } else {
    printError("suffixError", "");
    suffixErr = false;
  }
}

function ValidateCredentials() {
  let credentials = document.signUpForm.credentials.value;
  if (credentials == "") {
    printError("credentialsError", "Please enter credentials");
  }
}

function ValidatePhoneNumber() {
  let phoneNumber = document.signUpForm.phoneNumber.value;
  let phoneNumberError = true;

  if (phoneNumber == "") {
    printError("phoneNumberError", "Please enter phone number");
  } else {
    let regex = /^[1-9]\d{9}$/;
    if (regex.test(phoneNumber) === false) {
      printError(
        "phoneNumberError",
        "Please enter a valid 10 digit phone number"
      );
    } else {
      printError("phoneNumberError", "");
      phoneNumberError = false;
    }
  }
}

function ValidateEmailAddress() {
  let emailAddress = document.signUpForm.email.value;
  let emailaddrError = true;
  if (emailAddress == "") {
    printError("emailAddressError", "Please enter your Email Address");
  } else {
    let validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (validRegex.test(emailAddress) === false) {
      printError("emailAddressError", "Please enter a valid Email address");
    } else {
      printError("emailAddressError", "");
      emailaddrError = false;
    }
  }
}

function ValidateState() {
  let state = document.signUpForm.state.value;
  let stateError = true;

  if (state == "none") {
    printError("stateError", "Please select a state");
  } else {
    printError("stateError", "");
    stateError = false;
  }
}

function ValidateAreaOfFocus() {
  let areaOfFocus = document.signUpForm.areaOfFocus.value;
  let areaOfFocusError = true;

  if (areaOfFocus == "") {
    printError(
      "areaOfFocusError",
      "Please write a brief overview on area of focus up to 250 characters"
    );
  } else {
    printError("areaOfFocusError", "");
    areaOfFocusError = false;
  }
}

function ValidateHourReferred() {
  let hourReferred = document.signUpForm.hourReferred.value;
  let hourReferredError = true;

  if (hourReferred == "none") {
    printError(
      "hourReferredError",
      "Please select any hours you can see patients referred from Tulip in a typical week "
    );
  } else {
    printError("hourReferredError", "");
    hourReferredError = false;
  }
}

function ValidateTypicalResponseTime() {
  let typicalResponseTime = document.signUpForm.typicalResponseTime.value;
  let typicalResponseTimeError = true;

  if (typicalResponseTime == "none") {
    printError(
      "typicalResponseTimeError",
      "Please select your typical response time to new patient inquiries"
    );
  } else {
    printError("typicalResponseTimeError", "");
    typicalResponseTimeError = false;
  }
}

function ValidateWaitTimeForPatient() {
  let waitTimeForPatient = document.signUpForm.waitTimeForPatient.value;
  let waitTimeForPatientError = true;

  if (waitTimeForPatient == "none") {
    printError(
      "waitTimeForPatientError",
      "Please select any hour patients usually have to wait before there is an opening for a first appointment"
    );
  } else {
    printError("waitTimeForPatientError", "");
    waitTimeForPatientError = false;
  }
}
