// Patient.tsx
"use client"
import React, { useCallback, useEffect, useRef, useState } from "react"
import { Channel, Chat, Message, MixedTextTypedElement, TimetokenUtils, User } from "@pubnub/chat"
import "./App.css"

const patientData = {
  id: "patient",
  data: { name: "Mary Watson", custom: { initials: "MW", avatar: "#ffab91" } },
}

export default function PatientApp() {
  const [chat, setChat] = useState<Chat>()
  const [text, setText] = useState("")
  const [users, setUsers] = useState<User[]>([])
  const [channel, setChannel] = useState<Channel>()
  const [messages, setMessages] = useState<Message[]>([])
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
        const chat = await Chat.init({
            publishKey: 'pub-c-f9cb07fb-86cb-488d-986a-4613c3a7b26e', // Replace with your actual publish key
            subscribeKey: 'sub-c-9005caf0-220e-4360-9b5e-ccb4e4fb33e0', // Replace with your actual subscribe key
            userId: patientData.id,
          });  
      const currentUser = await chat.currentUser.update(patientData.data)
      const interlocutor =
        (await chat.getUser("doctor")) ||
        (await chat.createUser("doctor", { name: "Dr. John Doe", custom: { initials: "DR", avatar: "#4caf50" } }))
      const { channel } = await chat.createDirectConversation({
        user: interlocutor,
        channelData: { name: "Patient-Doctor Channel" },
      })
      setChat(chat)
      setUsers([currentUser, interlocutor])
      setChannel(channel)
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

  if (!chat || !channel) return <p>Loading...</p>

  return (
    <main>
      <header>
        <h3>{channel.name}</h3>
        <h3>{chat.currentUser.name}</h3>
      </header>

      <section className="message-list" ref={messageListRef}>
        <ol>
          {messages.map((message) => {
            const user = users.find((user) => user.id === message.userId)
            return (
              <li key={message.timetoken}>
                <aside style={{ background: String(user?.custom?.avatar) }}>
                  {user?.custom?.initials}
                </aside>
                <article>
                  <h3>
                    {user?.name}
                    <time>
                      {TimetokenUtils.timetokenToDate(message.timetoken).toLocaleTimeString([], {
                        timeStyle: "short",
                      })}
                    </time>
                  </h3>
                  <p>
                    {message
                      .getLinkedText()
                      .map((messagePart: MixedTextTypedElement, i: number) => (
                        <span key={String(i)}>{renderMessagePart(messagePart)}</span>
                      ))}
                  </p>
                </article>
              </li>
            )
          })}
        </ol>
      </section>

      <form className="message-input" onSubmit={handleSend}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Send message"
        />
        <input type="submit" value="➔" onClick={handleSend} style={{ color: text && "#de2440" }} />
      </form>
    </main>
  )
}
