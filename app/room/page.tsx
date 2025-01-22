"use client"

import { Header } from "@/components/Header"
import { Button } from "@/components/Button"
import { SendHorizonal } from "lucide-react"

import {
    Drawer,
    DrawerTitle,
    DrawerContent,
    DrawerDescription,
    DrawerTrigger,
    DrawerClose
} from "@/components/ui/drawer"
import { Dispatch, SetStateAction, useState } from "react"
import { cn } from "@/lib/utils"

import { ScrollArea } from "@/components/ui/scroll-area"

type DrawerDemoProps = {
    selected: string,
    setSelected: Dispatch<SetStateAction<string>>
}

const DrawerDemo = ({ selected, setSelected }: DrawerDemoProps) => {
    const [cards, setCards] = useState(["Calculadora isometrica de bariatrica ferrada pra cacete"])

    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button type="button" className="w-full border p-4 bg-transparent text-start text-color4">
                    {selected || <span className="text-color2">Selecione aqui sua carta</span>}
                </Button>
            </DrawerTrigger>
            <DrawerContent className="bg-white">
                <DrawerTitle className="hidden text-center">Cards Drawer</DrawerTitle>
                <DrawerDescription className="hidden text-center">A place to select your card.</DrawerDescription>
                <div className="p-4 grid grid-cols-2 gap-4 w-full">
                    {cards.map(card => (
                        <DrawerClose key={card} asChild>
                            <button onClick={() => setSelected(card)} className="border border-color-3 p-4 text-sm text-start min-h-36 flex">
                                {card}
                            </button>
                        </DrawerClose>
                    ))}
                </div>
            </DrawerContent>
        </Drawer>
    )
}

type messages = {
    type: "server" | "client" | "room",
    message: string,
    name: string // Rastrear usos e tornar dinamico
}

type MessageBubbleProps = {
    message: messages
}

const MessageBubble = ({ message }: MessageBubbleProps) => {

    const messageTypeTitle = {
        "client": "ml-auto rounded-br-none border-color2/",
        "server": "self-start rounded-bl-none bg-color7 text-white border-none",
        "room": "bg-color3 text-white text-xs self-center"
    }

    const messageTypeDesc = {
        "client": "self-end",
        "server": "self-start",
        "room": "hidden"
    }
    return (
        <div className="flex flex-col">
            <div className={cn('px-3 py-1 rounded-lg size-fit max-w-xs border border-color3 text-pretty', messageTypeTitle[message.type])}>
                <span className="text-sm">{message.message}</span>
            </div>
            <span className={cn('text-xs text-color3 opacity-60 mt-1', messageTypeDesc[message.type])}>
                {message.name}
            </span>
        </div>
    )
}

const Home = () => {
    const [message, setMessage] = useState("")
    const [chat, setChat] = useState<messages[]>([{ type: "room", message: "Samuel entered", name: "room" }])
    const [server, setServer] = useState(true)

    const handleClick = () => {
        updateChat({ type: server ? "server" : "client", message, name: "Samuel" })
        setMessage("")
        setServer(!server)
    }

    const updateChat = (message: messages) => {
        setChat([...chat, message])
    }

    return (
        <main className="h-[100dvh] grid grid-rows-[auto_1fr_auto]">
            <div className="border-b shadow-md pt-3">
                <Header title="Let´s start ?" subtitle="Send “Ready” to start. ( 1 / 2 )" />
            </div>
                <div className="flex flex-col w-full px-4 py-2 gap-3">
                    {chat.map((message, index) => <MessageBubble key={index} message={message} />)}
                </div>
            <div className="flex gap-4 p-4">
                <DrawerDemo selected={message} setSelected={setMessage} />
                <Button disabled={!message} onClick={handleClick} className="p-2" icon={SendHorizonal} />
            </div>
        </main>
    )
}

export default Home