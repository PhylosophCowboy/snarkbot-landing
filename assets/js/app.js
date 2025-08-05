// Definitive fix for sendMessage function to resolve unresponsive button issue
function sendMessage() {
  const messageInput = document.getElementById('messageInput');
  const message = messageInput.value.trim();
  if (message === '') {
    alert('Please enter a message.');
    return;
  }
  // Disable the button to prevent multiple clicks
  const sendButton = document.getElementById('sendButton');
  sendButton.disabled = true;

  // Simulate sending message (e.g., via API call)
  setTimeout(() => {
    console.log('Message sent:', message);
    messageInput.value = '';
    sendButton.disabled = false;
  }, 1000);
}
