function validateForm() {
    const form = document.getElementById("registrationForm");
    const username = form.username.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
  
    // Reset previous error messages
    resetErrorMessages();
  
    // Validation checks
    let valid = true;
  
    if (username === "") {
      setError("usernameError", "Username is required.");
      valid = false;
    }
  
    if (email === "") {
      setError("emailError", "Email is required.");
      valid = false;
    } else if (!isValidEmail(email)) {
      setError("emailError", "Please enter a valid email address.");
      valid = false;
    }
  
    if (password === "") {
      setError("passwordError", "Password is required.");
      valid = false;
    } else if (password.length < 8) {
      setError("passwordError", "Password must be at least 8 characters.");
      valid = false;
    }
  
    if (confirmPassword === "") {
      setError("confirmPasswordError", "Please confirm your password.");
      valid = false;
    } else if (confirmPassword !== password) {
      setError("confirmPasswordError", "Passwords do not match.");
      valid = false;
    }
  
    return valid;
  }
  
  function isValidEmail(email) {
    // A basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function setError(id, message) {
    const errorElement = document.getElementById(id);
    errorElement.textContent = message;
  }
  
  function resetErrorMessages() {
    const errorElements = document.getElementsByClassName("error");
    for (let i = 0; i < errorElements.length; i++) {
      errorElements[i].textContent = "";
    }
  }
  