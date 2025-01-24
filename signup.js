// document.addEventListener("DOMContentLoaded", function () {
//     const form = document.getElementById("signupForm");
//     const passwordInput = document.getElementById("pass");
//     const strengthPercent = document.getElementById("strengthPercent");

//     // Function to show/hide password strength when password input is clicked
//     function togglePasswordStrength() {
//         if (strengthPercent.style.display === "none") {
//             strengthPercent.style.display = "inline-block";
//         } else {
//             strengthPercent.style.display = "none";
//         }
//     }

//     // Event listener to show/hide password strength when password input is clicked
//     passwordInput.addEventListener("click", togglePasswordStrength);

//     form.addEventListener("submit", function (event) {
//         event.preventDefault(); // Prevent the form from submitting by default

//         // Get input values
//         const name = document.getElementById("name").value.trim();
//         const email = document.getElementById("emailid").value.trim();
//         const password = passwordInput.value;
//         const confirmPassword = document.getElementById("cpass").value;
//         const termsCheckbox = document.getElementById("terms");

//         // Validate name (no numbers allowed)
//         if (name === "" || /\d/.test(name)) {
//             alert("Name cannot be empty and cannot contain numbers.");
//             return false;
//         }

//         // Basic email validation (format)
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!email.match(emailRegex)) {
//             alert("Invalid email address");
//             return false;
//         }

//         // Validate password (at least 8 characters including letters, numbers, and special characters)
//         if (password.length < 8 || !password.match(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)) {
//             alert("Password must be at least 8 characters and include letters, numbers, and special characters.");
//             return false;
//         }

//         // Confirm password
//         if (password !== confirmPassword) {
//             alert("Passwords do not match.");
//             return false;
//         }

//         // Checkbox validation
//         if (!termsCheckbox.checked) {
//             alert("Please agree to the terms and conditions.");
//             return false;
//         }

//         // Redirect to login page after successful signup
//         alert("Signup successful! Redirecting to the login page.");
//         window.location.href = 'login.html';
//     });

//     // Update password strength as the user types
//     passwordInput.addEventListener("keyup", function () {
//         const password = passwordInput.value;
//         const passwordStrength = calculatePasswordStrength(password);
//         strengthPercent.textContent = `${passwordStrength}%`;
//         strengthPercent.style.display = "inline-block"; // Show the strength indicator
//     });



//     // Calculate password strength as described in previous responses
//     function calculatePasswordStrength(password) {
//         const length = password.length;

//         // Count the number of character types used (lowercase, uppercase, numeric, special characters)
//         let lowerCase = 0;
//         let upperCase = 0;
//         let numeric = 0;
//         let specialChars = 0;

//         for (let i = 0; i < length; i++) {
//             const char = password[i];
//             if (/[a-z]/.test(char)) {
//                 lowerCase++;
//             } else if (/[A-Z]/.test(char)) {
//                 upperCase++;
//             } else if (/\d/.test(char)) {
//                 numeric++;
//             } else {
//                 specialChars++;
//             }
//         }

//         // Calculate the percentage of character types used in the password
//         let percentStrength = (lowerCase + upperCase + numeric + specialChars) / 4 * 100;

//         // Bonus points for length
//         if (length >= 8) {
//             percentStrength += 25;
//         }

//         // Ensure the strength is at least 0 and at most 100
//         percentStrength = Math.max(0, Math.min(100, percentStrength));

//         return percentStrength.toFixed(2);
//     }



//     // Function to toggle password visibility
//     function togglePasswordVisibility() {
//         const passwordInput = document.getElementById("pass");
//         const toggleButton = document.getElementById("togglePassword");

//         if (passwordInput.type === "password") {
//             passwordInput.type = "text";
//             toggleButton.innerHTML = "&#128064;"; // Change to an eye icon with a slash
//         } else {
//             passwordInput.type = "password";
//             toggleButton.innerHTML = "&#128065;"; // Change back to the eye icon
//         }
//     }

//     // Event listener to toggle password visibility when the button is clicked
//     document.getElementById("togglePassword").addEventListener("click", togglePasswordVisibility);

// });




document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signupForm");
    const passwordInput = document.getElementById("pass");
    const strengthPercent = document.getElementById("strengthPercent");

    // Function to show/hide password strength when password input is clicked
    function togglePasswordStrength() {
        if (strengthPercent.style.display === "none") {
            strengthPercent.style.display = "inline-block";
        } else {
            strengthPercent.style.display = "none";
        }
    }

    // Event listener to show/hide password strength when password input is clicked
    passwordInput.addEventListener("click", togglePasswordStrength);

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting by default

        // Get input values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("emailid").value.trim();
        const password = passwordInput.value;
        const confirmPassword = document.getElementById("cpass").value;
        const termsCheckbox = document.getElementById("terms");

        // Validate name (no numbers allowed)
        if (name === "" || /\d/.test(name)) {
            alert("Name cannot be empty and cannot contain numbers.");
            return false;
        }

        // Basic email validation (format)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.match(emailRegex)) {
            alert("Invalid email address");
            return false;
        }

        // Validate password (at least 8 characters including letters, numbers, and special characters)
        if (password.length < 8 || !password.match(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)) {
            alert("Password must be at least 8 characters and include letters, numbers, and special characters.");
            return false;
        }

        // Confirm password
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return false;
        }

        // Checkbox validation
        if (!termsCheckbox.checked) {
            alert("Please agree to the terms and conditions.");
            return false;
        }

        // Redirect to login page after successful signup
        alert("Signup successful! Redirecting to the login page.");
        window.location.href = 'login.html';
    });

    // Update password strength as the user types
    passwordInput.addEventListener("keyup", function () {
        const password = passwordInput.value;
        const passwordStrength = calculatePasswordStrength(password);
        strengthPercent.textContent = `${passwordStrength}%`;

        // Remove previous strength classes
        strengthPercent.classList.remove("good", "strong", "very-strong");

        // Determine the strength class based on the password strength percentage
        if (passwordStrength >= 75) {
            strengthPercent.classList.add("very-strong");
        } else if (passwordStrength >= 50) {
            strengthPercent.classList.add("strong");
        } else if (passwordStrength >= 25) {
            strengthPercent.classList.add("good");
        }

        strengthPercent.style.display = "inline-block"; // Show the strength indicator
    });

    // Calculate password strength as described in previous responses
    function calculatePasswordStrength(password) {
        const length = password.length;

        // Count the number of character types used (lowercase, uppercase, numeric, special characters)
        let lowerCase = 0;
        let upperCase = 0;
        let numeric = 0;
        let specialChars = 0;

        for (let i = 0; i < length; i++) {
            const char = password[i];
            if (/[a-z]/.test(char)) {
                lowerCase++;
            } else if (/[A-Z]/.test(char)) {
                upperCase++;
            } else if (/\d/.test(char)) {
                numeric++;
            } else {
                specialChars++;
            }
        }

        // Calculate the percentage of character types used in the password
        let percentStrength = (lowerCase + upperCase + numeric + specialChars) / 4 * 100;

        // Bonus points for length
        if (length >= 8) {
            percentStrength += 25;
        }

        // Ensure the strength is at least 0 and at most 100
        percentStrength = Math.max(0, Math.min(100, percentStrength));

        return percentStrength.toFixed(2);
    }

    //  Function to toggle password visibility
    function togglePasswordVisibility() {
        const passwordInput = document.getElementById("pass");
        const toggleButton = document.getElementById("togglePassword");

        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            toggleButton.innerHTML = "&#128064;"; // Change to an eye icon with a slash
        } else {
            passwordInput.type = "password";
            toggleButton.innerHTML = "&#128065;"; // Change back to the eye icon
        }
    }

    // Event listener to toggle password visibility when the button is clicked
    document.getElementById("togglePassword").addEventListener("click", togglePasswordVisibility);
});
