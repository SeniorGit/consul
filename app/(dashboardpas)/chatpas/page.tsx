'use client';
import React, { useState, useEffect } from 'react';
import PubNub from 'pubnub';
import hexoid from 'hexoid';

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
        if (event.publisher !== 'patient-uuid') {
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
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    pubnub.publish({
      channel: 'doctor-patient-chat',
      message: newMessage,
    });

    setInput('');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar for Conversations */}
      <div className="w-1/4 bg-white p-4 border-r">
        <div className="text-lg font-bold mb-4">Messages</div>
        <div className="flex items-center p-2 bg-blue-100 rounded-lg cursor-pointer mb-4">
          <img
            src="https://via.placeholder.com/50"
            alt="Profile"
            className="rounded-full w-12 h-12 mr-3"
          />
          <div>
            <p className="font-semibold">Isey S.Psi, M.Psi. Psikolog</p>
            <p className="text-gray-500 text-sm">Halo 👋</p>
          </div>
        </div>
      </div>

      {/* Main Chat Window */}
      <div className="flex-1 flex flex-col p-6 bg-gray-50">
        {/* Chat Header */}
        <div className="flex items-center justify-between mb-4 bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3">
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="rounded-full"
            />
            <div className="font-semibold text-lg">Isey S.Psi, M.Psi. Psikolog</div>
          </div>
          <div className="flex space-x-4 text-blue-600">
            <button className="p-2 bg-blue-100 rounded-full">Call</button>
            <button className="p-2 bg-blue-100 rounded-full">Video</button>
          </div>
        </div>

        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg max-w-md ${
                msg.sender === 'Patient'
                  ? 'bg-blue-500 text-white ml-auto'
                  : 'bg-blue-100 text-black mr-auto'
              }`}
              style={{
                borderRadius: '15px',
                maxWidth: '60%',
                alignSelf: msg.sender === 'Patient' ? 'flex-end' : 'flex-start',
              }}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* Input Box */}
        <div className="flex items-center mt-4 bg-white p-2 rounded-lg shadow-sm">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-2 border-none outline-none rounded-l-lg"
          />
          <button
            onClick={handleSend}
            className="bg-blue-600 text-white px-4 rounded-r-lg flex items-center justify-center"
          >
            Send
          </button>
        </div>
      </div>

      {/* Profile Details */}
      <div className="w-1/4 bg-white p-6 border-l flex flex-col items-center">
        <button className="self-end text-gray-400 p-2">X</button>
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className="rounded-full w-24 h-24 mt-4"
        />
        <h3 className="text-xl font-semibold mt-4">Isey S.Psi, M.Psi. Psikolog</h3>
        <p className="text-gray-500 mt-2">Psikolog Klinis Dewasa</p>
        <p className="text-gray-500 mt-1">Stress, Trauma, Anxiety</p>
        <div className="flex space-x-2 mt-4">
          <span className="bg-green-500 text-white py-1 px-2 rounded">Available</span>
          <span className="bg-blue-500 text-white py-1 px-2 rounded">8 years</span>
        </div>
        <p className="text-gray-500 mt-4">Bandung, Jawa Barat</p>
        <div className="flex items-center space-x-2 mt-2">
          <span className="text-gray-500">8:00 AM - 12:00 AM</span>
        </div>
      </div>
    </div>
  );
};

export default PatientChat;
