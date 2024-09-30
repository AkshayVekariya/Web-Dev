// client.js

// Function to handle the login button click event
function handleLoginButtonClick() {
    // Redirect user to initiate Twitter authentication
    window.location.href = '/auth/twitter';
}

// Add event listener to the "Login with Twitter" button
document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('loginButton');
    if (loginButton) {
        loginButton.addEventListener('click', handleLoginButtonClick);
    } else {
        console.error('Login button not found');
    }
});
