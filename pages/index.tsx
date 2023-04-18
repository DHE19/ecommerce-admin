/* eslint-disable @next/next/no-img-element */
import {useSession} from 'next-auth/react'
import Layout from "@/components/Layout";

export default function Home() {
  const {data: session} = useSession();
  return(
    <Layout>
      <div className='flex justify-between'>
        <h2>
        Hello, {session?.user?.name}
        </h2>
        <div className='flex items-center bg-gray-300 text-black gap-1 rounded-lg  overflow-hidden'>
          <img src={session?.user?.image as string} alt={session?.user?.name as string} className="w-8 h-8" />
          <span className='px-2'>{session?.user?.name}</span>
        </div>
      </div>
    </Layout>
  )
}
