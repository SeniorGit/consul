// Patient.tsx
"use client"
import React, { useCallback, useEffect, useRef, useState } from "react"
import { Channel, Chat, Message, MixedTextTypedElement, TimetokenUtils, User } from "@pubnub/chat"
import Sidebar from "../../navbar"
const patientData = {
  id: "patient",
  data: { name: "Alvito", custom: { initials: "Ao", avatar: "#ffab91" } },
}

// Sample user data (you can replace this with dynamic data)
const userList = [
  { id: "user1", name: "Isey S.Psi, M.Psi, Psychologis", avatar: "#4caf50", messagePreview: "", time: "" },
]

export default function PatientApp() {
  const [chat, setChat] = useState<Chat | null>(null)
  const [text, setText] = useState("")
  const [users, setUsers] = useState<User[]>([])
  const [channel, setChannel] = useState<Channel | null>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [isChatOpen, setIsChatOpen] = useState(false) // State to toggle chat visibility
  const [searchTerm, setSearchTerm] = useState("") // State for search functionality
  const messageListRef = useRef<HTMLElement>(null)

  async function handleSend(event: React.SyntheticEvent) {
    event.preventDefault()
    if (!text || !channel) return
    await channel.sendText(text)
    setText("")
  }

  useEffect(() => {
    if (!messageListRef.current) return
    messageListRef.current.scrollTop = messageListRef.current.scrollHeight
  }, [messages])

  useEffect(() => {
    if (!channel) return
    return channel.connect((message) => setMessages((messages) => [...messages, message]))
  }, [channel])

  useEffect(() => {
    async function initializeChat() {
      try {
        const chat = await Chat.init({
          publishKey: 'pub-c-f9cb07fb-86cb-488d-986a-4613c3a7b26e',
          subscribeKey: 'sub-c-9005caf0-220e-4360-9b5e-ccb4e4fb33e0',
          userId: patientData.id,
        })

        const currentUser = await chat.currentUser.update(patientData.data)
        const interlocutor =
          (await chat.getUser("doctor")) ||
          (await chat.createUser("doctor", { name: "Isey S.Psi, M.Psi, Psychologis", custom: { initials: "Isey", avatar: "#4caf50" } }))
        const { channel } = await chat.createDirectConversation({
          user: interlocutor,
          channelData: { name: "Patient-Doctor Channel" },
        })
        setChat(chat)
        setUsers([currentUser, interlocutor])
        setChannel(channel)
      } catch (error) {
        console.error("Failed to initialize chat:", error)
      }
    }

    initializeChat()
  }, [])

  const renderMessagePart = useCallback((messagePart: MixedTextTypedElement) => {
    if (messagePart.type === "text") {
      return messagePart.content.text
    }
    if (messagePart.type === "plainLink") {
      return <a href={messagePart.content.link}>{messagePart.content.link}</a>
    }
    if (messagePart.type === "textLink") {
      return <a href={messagePart.content.link}>{messagePart.content.text}</a>
    }
    if (messagePart.type === "mention") {
      return <a href={`https://pubnub.com/${messagePart.content.id}`}>{messagePart.content.name}</a>
    }

    return ""
  }, [])

  // Filter the users based on the search term
  const filteredUsers = userList.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  if (!chat || !channel) {
    return (
      <p className="text-white">
        Initializing Chat... (If this persists, check your keys or network connection)
      </p>
    )
  }

  return (
    <section className="min-h-screen h-screen flex flex-col lg:flex-row p-5 gap-7 w-full  pt-[60px]" style={{ background: 'linear-gradient(to top, #ffffff 60%, #003A7C 100%)' }}>
    {/* Sidebar with search and chat list */}
    <Sidebar/>
    <div className={`lg:block ${isChatOpen ? 'hidden' : 'block'} w-full lg:w-1/4 h-full`}>
      <div className="bg-white p-4 shadow rounded-lg flex flex-col space-y-4 h-full">
        {/* Search bar */}
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search"
          className="p-2 border border-gray-300 rounded-lg"
        />
  
        {/* Chat List */}
        <div className="overflow-y-auto flex-1">
          {filteredUsers.map((user) => (
            <div key={user.id} className="flex items-center p-2 hover:bg-gray-100 cursor-pointer" onClick={() => setIsChatOpen(true)}>
              <div className="flex-shrink-0 w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center mr-3" style={{ background: user.avatar }}>
                {user.name.charAt(0)}
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-900">{user.name}</span>
                  <span className="text-sm text-gray-400">{user.time}</span>
                </div>
                <p className="text-sm text-gray-600 truncate">{user.messagePreview}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  <main className={`${isChatOpen ? 'block' : 'hidden'} w-full sm:w-full lg:flex lg:flex-1 flex-col bg-gray-100 rounded-lg shadow-lg h-[750px]`}>
  {/* Back button for small screens */}
  <button
    onClick={() => setIsChatOpen(false)}
    className="sm:block lg:hidden text-white p-2 mb-2 bg-blue-500 rounded-lg"
  >
    Back
  </button>

  {/* Chat header */}
  <header className="flex justify-between p-4 bg-white border-b border-gray-300 space-x-2">
    <h3 className="text-gray-800">chat with doctor</h3>
    <h3 className="text-gray-800">Isey S.Psi, M.Psi, Psychologist</h3>
  </header>

  {/* Message list, taking up all available space between header and footer */}
  <section className="flex flex-col flex-1 p-4 overflow-y-auto bg-white h-full">
    <ol className="list-none">
      {messages.length === 0 ? (
        <p className="text-gray-500">No messages yet...</p>
      ) : (
        messages.map((message) => {
          const user = users.find((user) => user.id === message.userId)
          return (
            <li key={message.timetoken} className="flex items-start mb-4">
              <aside
                className="flex-shrink-0 w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white mr-4"
                style={{ background: String(user?.custom?.avatar) }}
              >
                {user?.custom?.initials}
              </aside>
              <article>
                <h3 className="text-gray-800">
                  {user?.name}
                  <time className="text-gray-500 text-sm ml-2">
                    {TimetokenUtils.timetokenToDate(message.timetoken).toLocaleTimeString([], {
                      timeStyle: "short",
                    })}
                  </time>
                </h3>
                <p className="text-gray-600">
                  {message
                    .getLinkedText()
                    .map((messagePart: MixedTextTypedElement, i: number) => (
                      <span key={String(i)}>{renderMessagePart(messagePart)}</span>
                    ))}
                </p>
              </article>
            </li>
          )
        })
      )}
    </ol>
  </section>

  {/* Message input, positioned at the bottom */}
  <form className="flex p-4 bg-gray-200 border-t border-gray-300 w-full fixed bottom-0 left-0 sm:static" onSubmit={handleSend}>
    <input
      type="text"
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Send message"
      className="flex-1 p-2 rounded-lg border border-gray-300 bg-white"
    />
    <input
      type="submit"
      value="➔"
      className="cursor-pointer ml-4 p-2 bg-blue-500 text-white rounded-lg"
      onClick={handleSend}
      style={{ color: text ? "#de2440" : undefined }}
    />
  </form>
</main>
  </section>
  

  )
}
