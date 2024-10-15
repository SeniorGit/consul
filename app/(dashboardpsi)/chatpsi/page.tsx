'use client';
import React, { useState, useEffect } from 'react';
import PubNub from 'pubnub';
import { PubNubProvider, usePubNub } from 'pubnub-react';
import { Chat, MessageList, MessageInput } from "@pubnub/react-chat-components";

// Message type
interface Message {
  text: string;
  sender: string;
}

// PubNub initialization for the Doctor
const pubnub = new PubNub({
  publishKey: 'pub-c-f9cb07fb-86cb-488d-986a-4613c3a7b26e',
  subscribeKey: 'sub-c-9005caf0-220e-4360-9b5e-ccb4e4fb33e0',
  uuid: 'doctor-uuid',
});

const DoctorChatApp: React.FC = () => {
  return (
    <PubNubProvider client={pubnub}>
      <div className="flex h-screen">
        <ConversationsPanel />
        <ChatWindow userRole="Doctor" />
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
          alt="Patient"
          className="rounded-full"
        />
        <div className="ml-2">
          <p className="font-bold">Patient Name</p>
          <p className="text-sm text-gray-600">Hello 👋</p>
        </div>
      </div>
    </div>
  );
};

const ChatWindow: React.FC<{ userRole: string }> = ({ userRole }) => {
  const pubnub = usePubNub();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    const handleMessage = (event: { message: Message }) => {
      setMessages((msgs) => [...msgs, event.message]);
    };

    pubnub.subscribe({ channels: ['doctor-patient-chat'] });
    pubnub.addListener({ message: handleMessage });

    // Cleanup function to remove the listener and unsubscribe
    return () => {
      pubnub.unsubscribeAll();
      pubnub.removeListener({ message: handleMessage });
    };
  }, [pubnub]);

  const sendMessage = () => {
    if (inputValue.trim().length > 0) {
      const message: Message = {
        text: inputValue,
        sender: userRole,
      };

      pubnub.publish({
        channel: 'doctor-patient-chat',
        message: message,
      });

      // Clear the input field after sending
      setInputValue("");
    }
  };

  return (
    <div className="w-1/2 p-4 bg-white flex flex-col">
      <div className="flex-grow overflow-y-auto border-t border-b">
        {messages.map((msg, index) => (
          <p
            key={index}
            className={`p-2 ${
              msg.sender === userRole ? 'bg-blue-100 text-right' : 'bg-green-100 text-left'
            } rounded-lg mb-2`}
          >
            <strong>{msg.sender}:</strong> {msg.text}
          </p>
        ))}
      </div>
      {/* Input field for sending messages */}
      <div className="flex items-center mt-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
          placeholder="Type your message..."
          className="w-full p-2 border rounded"
        />
        <button
          onClick={sendMessage}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
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
          alt="Patient"
          className="rounded-full"
        />
        <p className="mt-2 font-bold">Patient Name</p>
        <p className="text-sm">Patient Info</p>
        <p className="text-sm text-gray-500">Location, etc.</p>
      </div>
    </div>
  );
};

export default DoctorChatApp;
