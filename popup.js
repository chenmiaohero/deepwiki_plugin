// Execute when the page is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Send a message to background.js to check if the current URL is a GitHub URL
  chrome.runtime.sendMessage({action: 'checkGitHub'}, function(response) {
    // If it's a GitHub URL, redirect directly (handled by background.js)
    if (response && response.isGitHub) {
      // Since background.js will handle the redirect, we only need to close the popup here
      window.close();
    } 
    // If it's not a GitHub URL, show a prompt and then close automatically
    else {
      // Close the popup automatically after 4 seconds
      setTimeout(function() {
        window.close();
      }, 4000);
    }
  });
});
