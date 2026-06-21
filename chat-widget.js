(function() {
    // Create widget container
    const widget = document.createElement('div');
    widget.id = 'ai-receptionist-widget';
    widget.innerHTML = `
        <div id="ai-chat-button" class="chat-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
        </div>
        <div id="ai-chat-window" class="chat-window hidden">
            <div class="chat-header">
                <h3>AI Receptionist (Automated Assistant)</h3>
                <button id="close-chat">&times;</button>
            </div>
            <div id="chat-messages" class="chat-messages">
                <div class="message bot">Hello! I am an AI-powered assistant trained to help you with Pindola AI Agency bookings and FAQs. I am not a human host. How can I help you today?</div>
            </div>
            <div class="chat-input-area">
                <input type="text" id="chat-input" placeholder="Type a message...">
                <button id="send-chat">Send</button>
            </div>
            <div class="chat-disclaimer">
                Powered by Pindola AI. This is an automated virtual assistant. Chats are processed by AI. Please do not input sensitive personal data.
            </div>
        </div>
    `;

    document.body.appendChild(widget);

    // Styles for the widget
    const styles = `
        #ai-receptionist-widget {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 9999;
            font-family: 'Inter', sans-serif;
        }
        .chat-button {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background-color: #2563eb;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            transition: transform 0.3s;
        }
        .chat-button:hover {
            transform: scale(1.1);
        }
        .chat-window {
            position: absolute;
            bottom: 80px;
            right: 0;
            width: 350px;
            height: 500px;
            background: white;
            border-radius: 12px;
            box-shadow: 0 8px 24px rgba(0,0,0,0.2);
            display: flex;
            flex-direction: column;
            overflow: hidden;
            transition: opacity 0.3s, transform 0.3s;
        }
        .chat-window.hidden {
            display: none;
            opacity: 0;
            transform: translateY(20px);
        }
        .chat-header {
            background: #2563eb;
            color: white;
            padding: 15px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .chat-header h3 {
            margin: 0;
            font-size: 1.1rem;
        }
        .chat-header button {
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
        }
        .chat-messages {
            flex: 1;
            padding: 15px;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        .message {
            padding: 10px 14px;
            border-radius: 18px;
            max-width: 80%;
            font-size: 0.9rem;
        }
        .message.bot {
            background: #f3f4f6;
            align-self: flex-start;
        }
        .message.user {
            background: #2563eb;
            color: white;
            align-self: flex-end;
        }
        .chat-input-area {
            padding: 15px;
            border-top: 1px solid #eee;
            display: flex;
            gap: 10px;
        }
        .chat-input-area input {
            flex: 1;
            padding: 8px 12px;
            border: 1px solid #ddd;
            border-radius: 20px;
            outline: none;
        }
        .chat-input-area button {
            background: #2563eb;
            color: white;
            border: none;
            padding: 8px 15px;
            border-radius: 20px;
            cursor: pointer;
        }
        .chat-disclaimer {
            font-size: 0.7rem;
            color: #999;
            padding: 10px 15px;
            background: #f9f9f9;
            border-top: 1px solid #eee;
            text-align: center;
            line-height: 1.2;
        }
    `;

    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    // Functionality
    const chatButton = document.getElementById('ai-chat-button');
    const chatWindow = document.getElementById('ai-chat-window');
    const closeChat = document.getElementById('close-chat');
    const sendChat = document.getElementById('send-chat');
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');

    chatButton.addEventListener('click', () => {
        chatWindow.classList.toggle('hidden');
        if (!chatWindow.classList.contains('hidden')) {
            chatInput.focus();
        }
    });

    closeChat.addEventListener('click', () => {
        chatWindow.classList.add('hidden');
    });

    function addMessage(text, isUser = false) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `message ${isUser ? 'user' : 'bot'}`;
        msgDiv.innerText = text;
        chatMessages.appendChild(msgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function handleSend() {
        const text = chatInput.value.trim();
        if (text) {
            addMessage(text, true);
            chatInput.value = '';
            
            // Mock response
            setTimeout(() => {
                addMessage("This is a demo of our AI Receptionist. In a live site, I would be able to answer questions about the business, book appointments, and capture lead info!");
            }, 1000);
        }
    }

    sendChat.addEventListener('click', handleSend);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSend();
    });
})();
