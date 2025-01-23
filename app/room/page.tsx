"use client"
import io from "socket.io-client"
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { messages } from "@/types";
import { Chat } from "@/components/Chat";
import { CardsForm, CardsDrawerValues } from "@/components/CardsForm";
import { SubmitHandler } from "react-hook-form";

let socket: typeof io.Socket;

export default function Page() {
    const searchParams = useSearchParams()
    const name = searchParams.get('name') || ''
    const [chat, setChat] = useState<messages[]>([])
    const [cards, setCards] = useState<string[]>(["Ready"])

    useEffect(() => {
        socket = io("http://pmcuyqqgep.a.pinggy.link:4000", { query: { name } });
        socket.on("connect", () => {
            console.log("Olá")
        })

        socket.on("data", updateChat)
        socket.on("cards", setCards)
        socket.on("disconnect", () => updateChat({ type: "room", message: `${name} has left`, name }))
    }, [name])

    const onSubmit: SubmitHandler<CardsDrawerValues> = (data) => {
        const message = data["cardsDrawer"]
        socket.emit("message", message)
        //updateChat({ type: "client", message, name })
    }

    const updateChat = (message: messages) => {
        setChat((prevChat) => [...prevChat, message])
    }

    return (
        <div className="h-[100dvh] grid grid-rows-[min-content_auto_min-content]">
            <div></div>
            <Chat messages={chat} />
            <CardsForm options={cards} onSubmit={onSubmit}/>
        </div>
    )
}