// Wait for the document to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Set a timeout to show the navbar after 5 seconds (for example)
    setTimeout(function() {
        // Get the navbar element
        var navbar = document.getElementById('navbar');
        // Set its display property to 'block' to make it visible
        navbar.style.display = 'block';
    }, 50); // 5000 milliseconds = 5 seconds
});
