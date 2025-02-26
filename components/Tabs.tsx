import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import { UsersRound, DoorOpen } from "lucide-react"

export const TabsRoom = () => {
    return (
        <Tabs defaultValue="code" className='max-w-96'>
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="code">I Have Friends!</TabsTrigger>
                <TabsTrigger disabled value="lobby">I’m Alone :(</TabsTrigger>
            </TabsList>
            <TabsContent value="code">
                <form className='flex flex-col gap-4' action="/room">
                    <Input name="name" label="Player ID" required className='outline-none' icon={UsersRound} placeholder='e.g. Cleyton' />
                    <Input type="tel" name="roomId" label="Room ID" required className='outline-none' icon={DoorOpen} placeholder='e.g. 0 - 100' />
                    <Button className='w-full bg-color4 text-color1'>Enter Room</Button>
                </form>
            </TabsContent>
            <TabsContent value="lobby">
                <div className='w-full'></div>
            </TabsContent>
        </Tabs>
    )
}
