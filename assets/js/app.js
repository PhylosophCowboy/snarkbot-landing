// Corrected app.js content with window.scrollToChat declaration and fixed function exposure

(function() {
  // Function to scroll to chat element
  function scrollToChat() {
    var chatElement = document.getElementById('chat');
    if (chatElement) {
      chatElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Expose the scrollToChat function to the global window object
  window.scrollToChat = scrollToChat;

  // Additional functions can be added here and exposed similarly if needed
})();
