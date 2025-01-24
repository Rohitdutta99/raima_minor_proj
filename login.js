
document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("password");
    const toggleButton = document.getElementById("togglePasswordlogin");

    // Function to toggle password visibility
    function togglePasswordVisibility() {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            toggleButton.innerHTML = "&#128064;"; // Change to an eye icon with a slash
        } else {
            passwordInput.type = "password";
            toggleButton.innerHTML = "&#128065;"; // Change back to the eye icon
        }
    }

    // Event listener to toggle password visibility when the button is clicked
    toggleButton.addEventListener("click", togglePasswordVisibility);
});

