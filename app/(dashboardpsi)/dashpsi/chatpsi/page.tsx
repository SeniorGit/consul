'use client';
import React, { useState, useEffect } from 'react';
import PubNub from 'pubnub';
import Sidebar from '../../navbar';

interface Message {
  text: string;
  sender: string;
}

export default function DoctorChat() {
  const pubnub = new PubNub({
    publishKey: 'pub-c-f9cb07fb-86cb-488d-986a-4613c3a7b26e',
    subscribeKey: 'sub-c-9005caf0-220e-4360-9b5e-ccb4e4fb33e0',
    uuid: 'doctor-uuid', // Unique identifier for doctor
  });

  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const listener = {
      message: (event: { message: Message }) => {
        if (event.message.sender !== 'Doctor') {
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
    if (!input.trim()) return; // Prevent sending empty messages

    const newMessage = { text: input, sender: 'Doctor' };

    setMessages((prevMessages) => [...prevMessages, newMessage]);

    pubnub.publish({
      channel: 'doctor-patient-chat',
      message: newMessage,
    });

    setInput(''); // Clear input field after sending
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#DBE5F2] from-10% flex flex-col lg:flex-row p-5 gap-7">
      {/* Sidebar */}
      <Sidebar />

      {/* Chat Sidebar */}
      <div className="w-1/4 bg-white p-4 border-r">
        <div className="text-lg font-bold mb-4 flex items-center">
          <span>Messages</span>
        </div>
        <div className="bg-blue-100 p-3 rounded-lg flex items-center mb-4">
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="rounded-full w-10 h-10 mr-3"
          />
          <div>
            <p className="font-semibold">Alvito</p>
            <p className="text-gray-500 text-sm">Halo 👋</p>
          </div>
        </div>
      </div>

      {/* Main Chat Window */}
      <div className="flex-1 flex flex-col p-4 bg-gray-50">
        {/* Chat Header */}
        <div className="flex items-center justify-between bg-blue-200 p-4 rounded-lg mb-4">
          <div className="font-semibold text-lg">Alvito</div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg mb-2 max-w-lg ${
                msg.sender === 'Doctor'
                  ? 'bg-blue-600 text-white ml-auto'
                  : 'bg-blue-100 text-black mr-auto'
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* Input Box */}
        <div className="flex items-center bg-white p-2 rounded-lg shadow mt-4">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-2 outline-none"
          />
          <button
            onClick={handleSend}
            className="bg-blue-600 text-white p-2 rounded-lg ml-2"
          >
            ➤
          </button>
        </div>
      </div>

      {/* User Details */}
      <div className="w-1/4 bg-white p-4 border-l flex flex-col items-center">
        <button className="self-end text-gray-400">✕</button>
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className="rounded-full w-24 h-24 mt-4"
        />
        <h3 className="text-xl font-semibold mt-4">Alvito</h3>
        <p className="text-gray-500 mt-2">0813899776543</p>
        <p className="text-gray-500 mt-1">Bandung, Jawa Barat</p>
      </div>
    </div>
  );
}
