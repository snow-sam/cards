import { useEffect, useRef } from "react"
import { MessageBubble } from "@/components/MessageBubble"

import type { messages } from "@/types"

type ChatProps = {
    messages: messages[]
}

export const Chat = ({ messages }: ChatProps) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({
                top: scrollRef.current.scrollHeight,
                behavior: "smooth",
            });
        }
    }, [messages]);
    return (
        <div ref={scrollRef} className="flex flex-col w-full px-4 py-2 gap-3 overflow-y-auto">
            {messages.map((message, index) => <MessageBubble key={`${message}${index}`} message={message} />)}
        </div>
    )
}