// PatientChat.tsx
'use client'
import React, { useState, useEffect } from 'react';
import PubNub from 'pubnub';
import { PubNubProvider, usePubNub } from 'pubnub-react';

// Message type
interface Message {
  text: string;
  sender: string;
}

// PubNub initialization for the Patient
const pubnub = new PubNub({
  publishKey: 'pub-c-f9cb07fb-86cb-488d-986a-4613c3a7b26e',
  subscribeKey: 'sub-c-9005caf0-220e-4360-9b5e-ccb4e4fb33e0',
  uuid: 'patient-uuid',
});

const PatientChatApp: React.FC = () => {
  return (
    <PubNubProvider client={pubnub}>
      <div className="flex h-screen">
        <ConversationsPanel />
        <ChatWindow userRole="Patient" />
        <DetailsPanel />
      </div>
    </PubNubProvider>
  );
};

const ConversationsPanel: React.FC = () => {
  return (
    <div className="w-1/4 p-4 bg-gray-200">
      <h2 className="text-lg font-bold">Messages</h2>
      <input
        type="text"
        placeholder="Search"
        className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
      />
      {/* Mock conversation */}
      <div className="flex items-center p-2 mt-4 bg-white rounded-lg shadow-sm">
        <img
          src="https://via.placeholder.com/40"
          alt="Doctor"
          className="rounded-full"
        />
        <div className="ml-2">
          <p className="font-bold">Isey S.Psi, M.Psi. Psikolog</p>
          <p className="text-sm text-gray-600">Hello 👋</p>
        </div>
      </div>
    </div>
  );
};

const ChatWindow: React.FC<{ userRole: string }> = ({ userRole }) => {
  const pubnub = usePubNub();
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    const handleMessage = (event: { message: Message }) => {
      setMessages((msgs) => [...msgs, event.message]);
    };

    pubnub.subscribe({ channels: ['doctor-patient-chat'] });
    pubnub.addListener({ message: handleMessage });

    return () => {
      pubnub.unsubscribeAll();
    };
  }, [pubnub]);

  const sendMessage = () => {
    if (message.trim()) {
      pubnub.publish({
        channel: 'doctor-patient-chat',
        message: { text: message, sender: userRole },
      });
      setMessage('');
    }
  };

  return (
    <div className="w-1/2 p-4 bg-white flex flex-col">
      <div className="flex-grow overflow-y-auto border-t border-b">
        {messages.map((msg, index) => (
          <p
            key={index}
            className={`p-2 ${
              msg.sender === userRole ? 'bg-green-100 text-right' : 'bg-blue-100 text-left'
            } rounded-lg mb-2`}
          >
            <strong>{msg.sender}:</strong> {msg.text}
          </p>
        ))}
      </div>
      <div className="flex items-center mt-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message"
          className="flex-grow p-2 border rounded-lg"
        />
        <button
          onClick={sendMessage}
          className="ml-2 p-2 bg-green-500 text-white rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
};

const DetailsPanel: React.FC = () => {
  return (
    <div className="w-1/4 p-4 bg-gray-100">
      <h2 className="text-lg font-bold">Details</h2>
      <div className="flex flex-col items-center mt-4">
        <img
          src="https://via.placeholder.com/80"
          alt="Doctor"
          className="rounded-full"
        />
        <p className="mt-2 font-bold">Isey S.Psi, M.Psi. Psikolog</p>
        <p className="text-sm">Doctor Info</p>
        <p className="text-sm text-gray-500">Location, etc.</p>
      </div>
    </div>
  );
};

export default PatientChatApp;
