import React, { useState } from 'react';
import '../css/Chat.css';

const Chat = () => {
    const [chatMessages, setChatMessages] = useState([]);
    const [message, setMessage] = useState('');

    const sendMessage = () => {
        if (message.trim() === '') return;

        // Add the new message to the chatMessages array
        const newMessage = {
            sender: 'You', // Replace with the sender's name or username
            text: message,
        };

        setChatMessages([...chatMessages, newMessage]);
        setMessage('');
    };

    return (
        <div className="chat">
            <h2>Chat with Us</h2>
            <div className="chat-messages">
                {chatMessages.map((chatMessage, index) => (
                    <div key={index} className="chat-message">
                        <span className="chat-sender">{chatMessage.sender}:</span>
                        <span className="chat-text">{chatMessage.text}</span>
                    </div>
                ))}
            </div>
            <div className="chat-input">
                <input
                    type="text"
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Chat;
