import {
    Drawer,
    DrawerTitle,
    DrawerHeader,
    DrawerContent,
    DrawerDescription,
    DrawerTrigger,
    DrawerClose
} from "@/components/ui/drawer"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/Button"

type ChatDrawerProps = {
    value: string,
    onChange: (value: string) => void,
    options: string[]
}

export const ChatDrawer = ({ value, onChange, options }: ChatDrawerProps) => {
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button type="button" className="w-full border p-4 bg-transparent text-start text-color4">
                    {value || <span className="text-color2">Selecione aqui sua carta</span>}
                </Button>
            </DrawerTrigger>
            <DrawerContent className="bg-white">
                <DrawerHeader>
                    <DrawerTitle className="text-center">Choose the worst option</DrawerTitle>
                    <DrawerDescription className="text-center">We know your potential.</DrawerDescription>
                </DrawerHeader>
                <ScrollArea className='h-[400px]'>
                    <ul className='grid grid-cols-2 px-4 gap-4'>
                        {options.map((option) => (
                            <DrawerClose key={option}>
                                <li onClick={() => onChange(option)} className='cursor-pointer select-none border border-neutral-300 h-28 text-start text-xs md:text-sm p-4 rounded shadow'>{option}</li>
                            </DrawerClose>
                        ))}
                    </ul>
                </ScrollArea>
            </DrawerContent>
        </Drawer>
    )
}