// Latest version of assets/js/app.js
// This version includes the dynamic webhook call and removes the hardcoded responses

// Example content (replace with actual latest content from workspace):

function callWebhook(data) {
  const webhookUrl = data.webhookUrl;
  fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data.payload)
  })
  .then(response => response.json())
  .then(result => {
    console.log('Webhook call successful:', result);
  })
  .catch(error => {
    console.error('Error calling webhook:', error);
  });
}

// Removed hardcoded responses

// Additional app.js code here...