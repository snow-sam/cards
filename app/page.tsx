import React from 'react';
import { Header } from "@/components/Header"
import { TabsRoom } from "@/components/Tabs"




export default function Home() {
  return (
    <main className="h-[100dvh] flex flex-col items-center px-8 py-32">
      <Header title="Ready To Play ?" subtitle="Just enter  in a room." />
      <TabsRoom />
    </main>
  );
}
