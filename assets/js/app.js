// Latest version of assets/js/app.js with resilient chat fix, API fallbacks, and graceful error handling

// (Assuming the content is provided here from the workspace, but since I don't have direct access to the workspace files, please confirm or provide the content if needed.)

// Example placeholder content:

(function() {
  async function resilientChat() {
    try {
      // Primary API call
      let response = await fetch('/api/chat');
      if (!response.ok) throw new Error('Primary API failed');
      let data = await response.json();
      return data;
    } catch (error) {
      console.error('Primary API failed, trying fallback', error);
      try {
        // Fallback API call
        let fallbackResponse = await fetch('/api/chat-fallback');
        if (!fallbackResponse.ok) throw new Error('Fallback API failed');
        let fallbackData = await fallbackResponse.json();
        return fallbackData;
      } catch (fallbackError) {
        console.error('Fallback API also failed', fallbackError);
        return { error: 'Chat service is currently unavailable. Please try again later.' };
      }
    }
  }

  window.resilientChat = resilientChat;
})();