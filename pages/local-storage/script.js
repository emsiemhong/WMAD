function save() {
  const email = document.getElementById("email").value;
  if (email.trim() === "") {
    alert("Please enter email.");
    return;
  }

  let emailResult = checkEmail(email);

  if (emailResult) {
    alert("Valid Email!");
    saveEmailToLocalStorage(email);

  } else {
    alert("Please enter your email again ");
  }


function checkEmail(email) {
  if (email.includes("@") && email.length >= 8) {
    return true;
  } else {
    return false;
  }
}
  // Save the email above email to local storage
}



function display() {
  // ==change code only here== //
  const email = localStorage.getItem("email"); // get an email from local storage to
  // ==change code only here== //


  const display = document.getElementById("display-email");
  display.innerHTML = email;

}
display();