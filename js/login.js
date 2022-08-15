// step number1: add click event handler with the submit button
document.getElementById("btn-submit").addEventListener("click", function () {
  //   step number-2: get the email address inside the email input field
  //   Always remember to use .value to get text form an input field
  const emailField = document.getElementById("user-email");
  const email = emailField.value;
  //   step-3: get password
  // 3.a) set id on html element
  // 3.b) get the element
  // 3.c) get the value from the element
  const passwordField = document.getElementById("user-password");
  const password = passwordField.value;
  console.log(email, password);

  // dnager: Do not verify email password on the client side
  // Step-4: verify email and pass
  if (email === "sontan@baap.com" && password === "secret") {
    window.location.href = "bank.html";
  } else {
    alert("incorrect password or email");
  }
});
