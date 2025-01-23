import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import { UsersRound } from "lucide-react"

export const TabsRoom = () => {
    return (
        <Tabs defaultValue="code" className='max-w-96'>
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="code">I Have Friends!</TabsTrigger>
                <TabsTrigger disabled value="lobby">I’m Alone :(</TabsTrigger>
            </TabsList>
            <TabsContent value="code">
                <form className='flex flex-col gap-4' action="/room">
                    <Input name="name" required className='outline-none' icon={UsersRound} placeholder='e.g. Cleyton' />
                    <Button className='w-full'>Enter Room</Button>
                </form>
            </TabsContent>
            <TabsContent value="lobby">
                <div className='w-full'></div>
            </TabsContent>
        </Tabs>
    )
}
