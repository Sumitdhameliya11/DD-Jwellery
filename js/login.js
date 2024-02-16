let email = document.getElementById("email");
let password = document.getElementById("password");

function fun() {

  let email_error = document.getElementById("email_error");
  let password_error = document.getElementById("password_error");

  if (email.value == "") {
    email.style.border = "2px solid red";
    document.getElementById("email").style.color = "red";
    email_error.textContent = "Email required";
    email.focus();
    return false;
  } else if (password.value == "") {
    password.style.border = "2px solid red";
    document.getElementById("password").style.color = "red";
    password_error.textContent = "password required";
    password.focus();
    return false;
  } else {
    alert("Login successfully");
  }

  user={
    email:email.value,
    password:password.value
  }

  localStorage.setItem("user",JSON.stringify(user));
}
