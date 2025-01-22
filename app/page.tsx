import React, { InputHTMLAttributes, ElementType } from 'react';
import Link from 'next/link';
import { UsersRound } from "lucide-react"
import { Header } from "@/components/Header"
import { Button } from "@/components/Button"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"




type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon?: ElementType;
};

const Input: React.FC<InputProps> = ({ icon: Icon, className, ...props }) => {
  return (
    <div className='flex gap-4 items-center text-color3 border border-color2 rounded-xl py-2.5 px-4'>
      {Icon && <div className="w-fit"><Icon size={16} /></div>}
      <div className='flex flex-col'>
        <span className='text-xs text-color2 font-semibold'>Room ID</span>
        <input
          {...props}
          className={`text-3 text-base bg-transparent outline-hidden aspect-hidden ${className || ''}`}
        >
        </input>
      </div>
    </div>
  );
};


const TabsRoom = () => {
  return (
    <Tabs defaultValue="code" className='max-w-96'>
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="code">I Have Friends!</TabsTrigger>
        <TabsTrigger disabled value="lobby">I’m Alone :(</TabsTrigger>
      </TabsList>
      <TabsContent value="code">
        <div className='flex flex-col gap-4'>
          <Input className='outline-none' icon={UsersRound} placeholder='e.g. H3XP20' />
          <Link href={"/room"}>
            <Button className='w-full'>Enter Room</Button>
          </Link>
        </div>
      </TabsContent>
      <TabsContent value="lobby">
        <div className='w-full'></div>
      </TabsContent>
    </Tabs>
  )
}

export default function Home() {
  return (
    <main className="h-[100dvh] flex flex-col items-center px-8 py-32">
      <Header title="Ready To Play ?" subtitle="Just enter  in a room." />
      <TabsRoom />
    </main>
  );
}
