// Corrected app.js content ensuring scrollToChat and sendMessage are exposed

// Function to scroll to the chat section
function scrollToChat() {
  const chatSection = document.getElementById('chat');
  if (chatSection) {
    chatSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// Function to send a message
function sendMessage() {
  const input = document.getElementById('messageInput');
  const message = input ? input.value.trim() : '';
  if (message) {
    // Assuming there's a function or API to handle sending messages
    console.log('Sending message:', message);
    // Clear input after sending
    input.value = '';
  }
}

// Expose functions to global scope for button onclick handlers
window.scrollToChat = scrollToChat;
window.sendMessage = sendMessage;
