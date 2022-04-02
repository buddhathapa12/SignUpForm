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

  return nameErr;
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

  return nameErr;
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

  return suffixErr;
}

function ValidateCredentials() {
  let credentials = document.signUpForm.credentials.value;
  let credentialsErr = true;
  if (credentials == "") {
    printError("credentialsError", "Please enter credentials");
  } else {
    printError("credentialsError", "");
    credentialsErr = false;
  }

  return credentialsErr;
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

  return phoneNumberError;
}

function ValidateEmailAddress() {
  let emailAddress = document.signUpForm.email.value;
  let emailAddrError = true;
  if (emailAddress == "") {
    printError("emailAddressError", "Please enter your Email Address");
    document.querySelector("#email").style.backgroundImage =
      "url('../svgs/alert.svg')";
  } else {
    let validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (validRegex.test(emailAddress) === false) {
      printError("emailAddressError", "Please enter a valid Email address");
      document.querySelector("#email").style.backgroundImage =
        "url('../svgs/alert.svg')";
    } else {
      printError("emailAddressError", "");
      document.querySelector("#email").style.backgroundImage = null;
      emailAddrError = false;
    }
  }

  return emailAddrError;
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

  return stateError;
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

  return areaOfFocusError;
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

  return hourReferredError;
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

  return typicalResponseTimeError;
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

  return waitTimeForPatientError;
}

function ValidationOnSubmit() {
  let firstNameError = ValidateFirstName();
  let lastNameError = ValidateLastName();
  let suffixError = ValidateSuffix();
  let credentialsError = ValidateCredentials();
  let phoneNumberError = ValidatePhoneNumber();
  let emailAddressError = ValidateEmailAddress();
  let stateError = ValidateState();
  let areaOfFocusError = ValidateAreaOfFocus();
  let hourReferredError = ValidateHourReferred();
  let typicalResponseTimeError = ValidateTypicalResponseTime();
  let waitTimeForPatientError = ValidateWaitTimeForPatient();

  if (
    firstNameError ||
    lastNameError ||
    suffixError ||
    credentialsError ||
    phoneNumberError ||
    emailAddressError ||
    stateError ||
    areaOfFocusError ||
    hourReferredError ||
    typicalResponseTimeError ||
    waitTimeForPatientError
  ) {
    return false;
  } else {
    return true;
  }
}
