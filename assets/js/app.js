// Snarkbot Landing Page JavaScript

// Global variables
let conversationTimer = 30 * 60; // 30 minutes in seconds
let timerInterval;
let selectedPlan = null;
let conversationStarted = false;
let messageCount = 0;

// Personality assessment questions
const personalityQuestions = [
    "When you're facing a tricky problem, do you feel that itch to jump right in and figure it out as you go? Or does something in you say 'whoa there, let's step back and look at the whole picture first'? I'm curious because it tells me a lot about how that fascinating mind of yours works...",
    "What's something you do naturally that others often ask you to explain or teach them? And when you do explain it, how do you typically approach that?",
    "When people describe you to others, what word or phrase do they use most often?",
    "In group discussions, are you more likely to be the one asking questions, offering solutions, or helping others feel heard?",
    "Do you find it easy to accept compliments? And what type of compliment makes you feel most genuinely appreciated and understood?",
    "When you see someone struggling with something you understand well, what's your first impulse?",
    "If you could solve one problem that affects many people, what would it be and why does it matter to you?",
    "When you make decisions, do you rely more on logic, intuition, past experience, or something else?",
    "What's something you wish more people understood about life or the world?",
    "What's a question you wish someone would ask you but rarely does?"
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Set up event listeners
    setupEventListeners();
    
    // Initialize character count
    updateCharacterCount();
    
    // Load any saved session data
    loadSessionData();
}

function setupEventListeners() {
    const chatInput = document.getElementById('chatInput');
    const sendButton = document.getElementById('sendButton');
    const emailForm = document.getElementById('emailForm');
    
    // Chat input events
    chatInput.addEventListener('input', updateCharacterCount);
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // Send button
    sendButton.addEventListener('click', sendMessage);
    
    // Email form submission
    if (emailForm) {
        emailForm.addEventListener('submit', handleEmailSubmission);
    }
    
    // Modal close events
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });
}

function scrollToChat() {
    document.getElementById('chat').scrollIntoView({ 
        behavior: 'smooth' 
    });
    
    // Focus on chat input
    setTimeout(() => {
        document.getElementById('chatInput').focus();
    }, 500);
}

function updateCharacterCount() {
    const chatInput = document.getElementById('chatInput');
    const charCount = document.getElementById('charCount');
    const currentLength = chatInput.value.length;
    
    charCount.textContent = `${currentLength}/1500`;
    
    // Change color if approaching limit
    if (currentLength > 1350) {
        charCount.style.color = '#d32f2f';
    } else if (currentLength > 1200) {
        charCount.style.color = '#f57c00';
    } else {
        charCount.style.color = '#666';
    }
}

async function sendMessage() {
    const chatInput = document.getElementById('chatInput');
    const message = chatInput.value.trim();
    
    if (!message) return;
    
    // Start conversation timer if this is the first message
    if (!conversationStarted) {
        startConversationTimer();
        conversationStarted = true;
    }
    
    // Add user message to chat
    addMessageToChat(message, 'user');
    
    // Clear input
    chatInput.value = '';
    updateCharacterCount();
    
    // Show typing indicator
    showTypingIndicator();
    
    // Simulate AI response (replace with actual AI Tutor API call)
    setTimeout(() => {
        hideTypingIndicator();
        handleAIResponse(message);
    }, 1500 + Math.random() * 2000); // Random delay between 1.5-3.5 seconds
    
    messageCount++;
    
    // Save session data
    saveSessionData();
}
window.sendMessage = sendMessage;

function addMessageToChat(message, sender) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message fade-in`;
    
    const messageContent = document.createElement('div');
    messageContent.className = 'message-content';
    messageContent.innerHTML = `<p>${escapeHtml(message)}</p>`;
    
    messageDiv.appendChild(messageContent);
    chatMessages.appendChild(messageDiv);
    
    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function showTypingIndicator() {
    const chatMessages = document.getElementById('chatMessages');
    const typingDiv = document.createElement('div');
    typingDiv.id = 'typingIndicator';
    typingDiv.className = 'typing-indicator';
    typingDiv.innerHTML = `
        <span>Snarky is thinking</span>
        <div class="typing-dots">
            <span></span>
            <span></span>
            <span></span>
        </div>
    `;
    
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function hideTypingIndicator() {
    const typingIndicator = document.getElementById('typingIndicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

async function handleAIResponse(userMessage) {
    // Use AI Tutor API instead of canned logic!
    const chatHistory = getMessagesFromChat(); // If you want to send history
    const response = await callAITutorAPI(userMessage, chatHistory);
    addMessageToChat(response, 'snarky');
    
    // Check if conversation should continue or prompt for subscription
    if (conversationTimer <= 0) {
        setTimeout(() => {
            addMessageToChat("Well now, looks like our free time is up! But don't you worry - this is just the beginning of discovering what makes you extraordinary. Ready to continue our conversation?", 'snarky');
            scrollToPricing();
        }, 2000);
    }
}

function generateSnarkyResponse(userMessage) {
    // Simple response generation based on message count and content
    // This will be replaced with AI Tutor API calls
    
    const responses = [
        "Ah, now that's interesting! I can already see how your mind works. Tell me more about that...",
        "You know, that reminds me of something I've noticed about folks who think like you do...",
        "Well I'll be! That's exactly the kind of insight I was hoping to hear. Now, here's what I'm curious about...",
        "Fascinating! You're giving me a real window into what makes you tick. Let me ask you this...",
        "Now we're getting somewhere! I can see the gears turning in that remarkable mind of yours..."
    ];
    
    const followUpQuestions = personalityQuestions.slice(1); // Skip the first question
    
    if (messageCount < followUpQuestions.length) {
        return responses[Math.floor(Math.random() * responses.length)] + " " + followUpQuestions[messageCount - 1];
    } else {
        return "You know what? I'm getting a real clear picture of what makes you extraordinary. You've got a unique way of seeing the world, and I'd love to help you explore that further!";
    }
}

function startConversationTimer() {
    timerInterval = setInterval(() => {
        conversationTimer--;
        updateTimerDisplay();
        
        if (conversationTimer <= 0) {
            clearInterval(timerInterval);
            // Timer expired logic handled in handleAIResponse
        }
    }, 1000);
}

function updateTimerDisplay() {
    const timerDisplay = document.getElementById('timerDisplay');
    const minutes = Math.floor(conversationTimer / 60);
    const seconds = conversationTimer % 60;
    
    timerDisplay.textContent = `Free conversation: ${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    // Change color as time runs low
    if (conversationTimer <= 300) { // 5 minutes
        timerDisplay.style.color = '#d32f2f';
    } else if (conversationTimer <= 600) { // 10 minutes
        timerDisplay.style.color = '#f57c00';
    }
}

function scrollToPricing() {
    document.getElementById('pricing').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

function selectPlan(plan) {
    selectedPlan = plan;
    showModal('emailModal');
}

function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

function handleEmailSubmission(e) {
    e.preventDefault();
    
    const email = document.getElementById('emailInput').value;
    
    if (!email || !validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // Save email and proceed to Stripe
    saveUserEmail(email);
    closeModal('emailModal');
    
    // Initialize Stripe payment
    initializeStripePayment(selectedPlan, email);
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function saveUserEmail(email) {
    // Save to localStorage for now
    localStorage.setItem('userEmail', email);
    localStorage.setItem('selectedPlan', selectedPlan);
}

function initializeStripePayment(plan, email) {
    // Placeholder for Stripe integration
    // This will be implemented with actual Stripe configuration
    
    console.log('Initializing Stripe payment for:', plan, email);
    
    // For now, show a placeholder message
    alert(`Payment integration coming soon! Plan: ${plan}, Email: ${email}`);
    
    // In production, this would:
    // 1. Create Stripe checkout session
    // 2. Redirect to Stripe payment page
    // 3. Handle success/failure callbacks
}

function saveSessionData() {
    const sessionData = {
        conversationStarted,
        messageCount,
        conversationTimer,
        messages: getMessagesFromChat()
    };
    
    localStorage.setItem('snarkbotSession', JSON.stringify(sessionData));
}

function loadSessionData() {
    const savedData = localStorage.getItem('snarkbotSession');
    
    if (savedData) {
        try {
            const sessionData = JSON.parse(savedData);
            
            // Only restore if session is recent (within 24 hours)
            const sessionAge = Date.now() - (sessionData.timestamp || 0);
            if (sessionAge < 24 * 60 * 60 * 1000) {
                conversationStarted = sessionData.conversationStarted || false;
                messageCount = sessionData.messageCount || 0;
                conversationTimer = sessionData.conversationTimer || 30 * 60;
                
                // Restore messages if any
                if (sessionData.messages && sessionData.messages.length > 1) {
                    restoreMessages(sessionData.messages);
                }
                
                // Restart timer if conversation was in progress
                if (conversationStarted && conversationTimer > 0) {
                    startConversationTimer();
                }
            }
        } catch (e) {
            console.log('Error loading session data:', e);
        }
    }
}

function getMessagesFromChat() {
    const messages = [];
    const messageElements = document.querySelectorAll('.message');
    
    messageElements.forEach(msg => {
        const content = msg.querySelector('.message-content p').textContent;
        const sender = msg.classList.contains('user-message') ? 'user' : 'snarky';
        messages.push({ content, sender });
    });
    
    return messages;
}

function restoreMessages(messages) {
    const chatMessages = document.getElementById('chatMessages');
    
    // Clear existing messages except the initial one
    const initialMessage = chatMessages.querySelector('.snarky-message');
    chatMessages.innerHTML = '';
    if (initialMessage) {
        chatMessages.appendChild(initialMessage);
    }
    
    // Add restored messages (skip the first one as it's already there)
    messages.slice(1).forEach(msg => {
        addMessageToChat(msg.content, msg.sender);
    });
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Utility functions for future AI Tutor API integration
async function callAITutorAPI(message, conversationHistory) {
    // Placeholder for AI Tutor API integration
    // This will be implemented when we have the API details
    
    try {
        const response = await fetch('/api/ai-tutor/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message: message,
                history: conversationHistory,
                agent: 'snarkbot'
            })
        });
        
        if (!response.ok) {
            throw new Error('API call failed');
        }
        
        const data = await response.json();
        return data.response;
        
    } catch (error) {
        console.error('AI Tutor API error:', error);
        return "Well now, seems like I'm having a bit of trouble with my thoughts. Mind trying that again?";
    }
}

// Analytics tracking (placeholder)
function trackEvent(eventName, properties = {}) {
    // Placeholder for analytics integration
    console.log('Analytics event:', eventName, properties);
    
    // This will be implemented with Google Analytics or similar
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, properties);
    }
}

// Track page interactions
document.addEventListener('DOMContentLoaded', function() {
    trackEvent('page_loaded', { page: 'snarkbot_landing' });
});

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        validateEmail,
        escapeHtml,
        generateSnarkyResponse
    };
}
