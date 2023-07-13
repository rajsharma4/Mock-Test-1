function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    // Reset error messages
    clearErrors();

    // Validate name
    var nameInput = document.getElementById("name");
    var nameError = document.getElementById("nameError");
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required";
        nameInput.classList.add("error");
        nameInput.focus();
        return;
    }

    // Validate email
    var emailInput = document.getElementById("email");
    var emailError = document.getElementById("emailError");
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = "Invalid email address";
        emailInput.classList.add("error");
        emailInput.focus();
        return;
    }

    // Validate phone number
    var phoneInput = document.getElementById("phone");
    var phoneError = document.getElementById("phoneError");
    var phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phoneInput.value)) {
        phoneError.textContent = "Invalid phone number";
        phoneInput.classList.add("error");
        phoneInput.focus();
        return;
    }

    // Validate password
    var passwordInput = document.getElementById("password");
    var passwordError = document.getElementById("passwordError");
    if (passwordInput.value.trim() === "") {
        passwordError.textContent = "Password is required";
        passwordInput.classList.add("error");
        passwordInput.focus();
        return;
    }

    // Validate age
    var ageInput = document.getElementById("age");
    var ageError = document.getElementById("ageError");
    if (isNaN(ageInput.value) || ageInput.value < 1) {
        ageError.textContent = "Invalid age";
        ageInput.classList.add("error");
        ageInput.focus();
        return;
    }

    // Validate gender
    var genderInput = document.getElementById("gender");
    var genderError = document.getElementById("genderError");
    if (genderInput.value === "") {
        genderError.textContent = "Gender is required";
        genderInput.classList.add("error");
        genderInput.focus();
        return;
    }

    // Validate date
    var dateInput = document.getElementById("date");
    var dateError = document.getElementById("dateError");
    if (dateInput.value === "") {
        dateError.textContent = "Date is required";
        dateInput.classList.add("error");
        dateInput.focus();
        return;
    }

    // Validate color
    var colorInput = document.getElementById("color");
    var colorError = document.getElementById("colorError");
    if (colorInput.value === "") {
        colorError.textContent = "Color is required";
        colorInput.classList.add("error");
        colorInput.focus();
        return;
    }

    // Form is valid, perform desired action (e.g., submit the form)
    alert("Form submitted successfully!");
}

function clearErrors() {
    var errors = document.getElementsByClassName("error");
    for (var i = 0; i < errors.length; i++) {
        errors[i].textContent = "";
    }

    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].classList.remove("error");
    }
}