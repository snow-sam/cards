import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import type { messages } from "@/types"

type MessageBubbleProps = {
    message: messages
}

export const MessageBubble = ({ message }: MessageBubbleProps) => {

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

    const messageAnimation = {
        "client": {x: [0, -10], opacity: [0, 1]},
        "server": {x: [0, 10], opacity: [0.8, 1]},
        "room": {y: [0, 10], opacity: [0, 1]}
    }


    return (
        <motion.div animate={{...messageAnimation[message.type], transition: {duration: .25}}} className={`flex flex-col ${message.type === "room" ? "my-2" : ""}`}>
            <div className={cn('px-3 py-1 rounded-lg size-fit max-w-xs border border-color3 text-pretty', messageTypeTitle[message.type])}>
                <span className="text-sm">{message.message}</span>
            </div>
            <span className={cn('text-xs text-color3 opacity-60 mt-1', messageTypeDesc[message.type])}>
                {message.name}
            </span>
        </motion.div>
    )
}