// --- js/chatbot.js ---

// 1. Chatbot Toggle Functionality
function toggleChat() {
    const chatbotBox = document.getElementById('chatbot-box');
    chatbotBox.classList.toggle('open');
    // Clear input when opening the chat
    if (chatbotBox.classList.contains('open')) {
        document.getElementById('chat-input').value = '';
    }
}

// 2. Chatbot Message Sending (Client-Side Logic)
function sendMessage() {
    const chatInput = document.getElementById('chat-input');
    const message = chatInput.value.trim();
    chatInput.value = ''; // Clear input field

    if (message === '') return;

    // Display user message
    appendMessage(message, 'user');

    // Simulate an AI response (replace with actual backend/Firebase logic)
    simulateAiResponse(message);
}

// 3. Message Display Utility
function appendMessage(text, sender) {
    const messagesContainer = document.getElementById('chatbot-messages');
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message', sender);
    messageElement.textContent = text;
    messagesContainer.appendChild(messageElement);
    
    // Scroll to the bottom to show the newest message
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// 4. Simulated AI Response Logic (Replace with real AI/database calls)
function simulateAiResponse(userMessage) {
    let aiResponse = "I am an AI Assistant focused on Neural Networks. I can answer questions based on the content of this page.";
    
    const lowerCaseMessage = userMessage.toLowerCase();
    
    if (lowerCaseMessage.includes('backpropagation')) {
        aiResponse = "Backpropagation is the core algorithm for training neural networks. It calculates the error gradient and adjusts weights backward through the network to minimize the error.";
    } else if (lowerCaseMessage.includes('feed-forward')) {
        aiResponse = "A Feed-Forward Network processes data in one direction, from the input layer through the hidden layers to the output layer, used mainly for classification and prediction.";
    } else if (lowerCaseMessage.includes('components')) {
        aiResponse = "The core components are the Input Layer, one or more Hidden Layers (for computation), and the Output Layer (for the final result).";
    }

    setTimeout(() => {
        appendMessage(aiResponse, 'ai');
    }, 500); // Delay for better user experience
}

// NOTE: The Enter Key listener is now in item1.js for better modularity.