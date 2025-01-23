import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { ChatDrawer } from "@/components/ChatDrawer";
import { Button } from "@/components/Button";

import { SendHorizonal } from "lucide-react"

export interface CardsDrawerValues {
    cardsDrawer: string;
}

type CardsFormProps = {
    options: string[],
    onSubmit: SubmitHandler<CardsDrawerValues>
}

export const CardsForm = ({ options, onSubmit }: CardsFormProps) => {
    const { control, handleSubmit, reset } = useForm<CardsDrawerValues>();

    const onSubmit_: SubmitHandler<CardsDrawerValues> = (data) => {
        reset()
        console.log(reset)
        onSubmit(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit_)} className="flex gap-4 p-4 h-fit self-end">
            <Controller
                name="cardsDrawer"
                control={control}
                render={({ field }) => (
                    <ChatDrawer
                        value={field.value}
                        onChange={field.onChange}
                        options={options}
                    />
                )}
            />
            <Button type="submit" className="p-2" icon={SendHorizonal}></Button>
        </form>
    )
}