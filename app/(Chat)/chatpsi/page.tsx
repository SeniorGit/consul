// DoctorChat.tsx
'use client';
import React, { useState, useEffect } from 'react';
import PubNub from 'pubnub';

interface Message {
  text: string;
  sender: string;
}

const pubnub = new PubNub({
  publishKey: 'pub-c-f9cb07fb-86cb-488d-986a-4613c3a7b26e',
  subscribeKey: 'sub-c-9005caf0-220e-4360-9b5e-ccb4e4fb33e0',
  uuid: 'doctor-uuid', // Unique identifier for doctor
});

const DoctorChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    // Define the listener object as required by PubNub
    const listener = {
        message: (event: { message: Message }) => {
          if (event.message.sender !== 'Doctor') { // or use uuid for a more specific check
            setMessages((prevMessages) => [...prevMessages, event.message]);
          }
        },
      };

    // Add the listener and subscribe to the channel
    pubnub.addListener(listener);
    pubnub.subscribe({ channels: ['doctor-patient-chat'] });

    // Cleanup function to remove the listener and unsubscribe when the component unmounts
    return () => {
      pubnub.removeListener(listener);
      pubnub.unsubscribeAll();
    };
  }, []); // Empty dependency array ensures this only runs once

  const handleSend = () => {
    const newMessage = { text: input, sender: 'Doctor' };

    // Directly update the messages state to include the new message
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    // Publish the message to PubNub
    pubnub.publish({
      channel: 'doctor-patient-chat',
      message: newMessage,
    });

    // Clear input after sending
    setInput('');
  };

  return (
    <div>
      <h2>Doctor Chat</h2>
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender === 'Doctor' ? 'bg-blue-200' : 'bg-green-200'}>
            {msg.sender}: {msg.text}
          </div>
        ))}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default DoctorChat;
