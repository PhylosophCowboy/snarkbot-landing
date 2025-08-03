// Updated app.js using AI Tutor API for conversational responses

// Previous hardcoded logic commented out

// Example of new logic using AI Tutor API

async function getAIResponse(message) {
  const response = await fetch('https://api.aitutor.com/converse', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message })
  });
  const data = await response.json();
  return data.reply;
}

async function handleUserMessage(userMessage) {
  // Commented out hardcoded logic
  // if (userMessage === 'hello') {
  //   return 'Hi there! How can I help you today?';
  // }

  // Use AI Tutor API for response
  const aiReply = await getAIResponse(userMessage);
  displayMessage(aiReply);
}

function displayMessage(message) {
  const chatBox = document.getElementById('chat-box');
  const messageElem = document.createElement('div');
  messageElem.textContent = message;
  chatBox.appendChild(messageElem);
}

// Example usage
// handleUserMessage('hello');
