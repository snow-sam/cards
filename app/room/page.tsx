"use client"
import io from "socket.io-client"
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { messages } from "@/types";
import { Chat } from "@/components/Chat";
import { CardsForm, CardsDrawerValues } from "@/components/CardsForm";
import { SubmitHandler } from "react-hook-form";
import { Button } from "@/components/Button";
import { useRouter } from 'next/navigation'

import { Check, Trophy, Undo2 } from "lucide-react"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

let socket: typeof io.Socket;

export default function Page() {
    const searchParams = useSearchParams()
    const name = searchParams.get('name') || ''
    const roomId = searchParams.get('roomId') || ''

    const router = useRouter()
    const [chat, setChat] = useState<messages[]>([])
    const [cards, setCards] = useState<string[]>([])
    const [canSend, setCanSend] = useState(false)
    const [scoreBoard, setScoreBoard] = useState<[string, number][]>([])

    useEffect(() => {
        const updateChat = (message: messages) => {
            if (message.message == `${name} has entered`) setChat([])
            setChat((prevChat) => [...prevChat, message])
        }
        socket = io(`${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_PORT}`, { query: { name, roomId } });
        socket.on("connect", () => {
            return
        })

        socket.on("data", updateChat)
        socket.on("cards", (cards: string[]) => {
            setCards(cards)
            setCanSend(true)
        })
        socket.on("disconnect", () => updateChat({ type: "room", message: `${name} has left`, name }))
        socket.on("score", setScoreBoard)
    }, [name, roomId])

    const onSubmit: SubmitHandler<CardsDrawerValues> = (data) => {
        const message = data["cardsDrawer"]
        socket.emit("message", message)
        setCanSend(false)
    }

    const goBack = () => {
        socket.disconnect()
        router.push("/")
    }

    return (
        <div className="h-[100dvh] grid grid-rows-[min-content_auto_min-content] overflow-hidden">
            <div className="flex justify-between bg-neutral-100/70 p-4 shadow-sm border-b ">
                <Button onClick={goBack} className="p-2 bg-transparent text-color4"><Undo2 /></Button>
                <Popover>
                    <PopoverTrigger asChild><Button disabled={scoreBoard.length <= 0} className="p-2 bg-transparent text-amber-300"><Trophy /></Button></PopoverTrigger>
                    <PopoverContent className="mr-4">
                        <ul className="flex flex-col gap-2.5">
                            {scoreBoard.map(([player, score]) => (
                                <li className="flex justify-between font-medium" key={player}>
                                    <span>{player}</span>
                                    <span>{score}</span>
                                </li>
                            ))}
                        </ul>
                    </PopoverContent>
                </Popover>
            </div>
            <Chat messages={chat} />
            {cards.length !== 0 ?
                <CardsForm options={cards} onSubmit={onSubmit} /> :
                <Button disabled={!canSend} onClick={() => onSubmit({ cardsDrawer: "" })} className="p-2 flex justify-center w-fit mx-auto my-4 bg-white border border-color2">
                    <Check className="text-color6" />
                    <span className="text-color4 mx-4">Pronto</span>
                </Button>}
        </div>
    )
}