// PatientChat.tsx
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
  uuid: 'patient-uuid', // Unique identifier for patient
});

const PatientChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const listener = {
      message: (event: { message: Message, publisher: string }) => {
        if (event.publisher !== 'patient-uuid') { // Replace with the actual UUID used for patient
          setMessages((prevMessages) => [...prevMessages, event.message]);
        }
      },
    };
  
    pubnub.addListener(listener);
    pubnub.subscribe({ channels: ['doctor-patient-chat'] });
  
    return () => {
      pubnub.removeListener(listener);
      pubnub.unsubscribeAll();
    };
  }, []);

  const handleSend = () => {
    const newMessage = { text: input, sender: 'Patient' };

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
      <h2>Patient Chat</h2>
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender === 'Patient' ? 'bg-green-200' : 'bg-blue-200'}>
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

export default PatientChat;
