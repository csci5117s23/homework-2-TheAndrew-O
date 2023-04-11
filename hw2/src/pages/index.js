
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'
import ToDoList from './toDoList'
import { useSession, signOut, signIn } from 'next-auth/react'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { useRouter } from 'next/router'
import Navbar from '@/components/Navbar'
import ParticleBackground from '@/components/ParticleBackground'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const API_ENDPOINT = "https://backend-zk8d.api.codehooks.io/dev/users"
  const API_KEY = "6ac3cba4-a25e-4341-91cc-0f809af8bc44"
  const {data: session, status} = useSession()
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(API_ENDPOINT, {
        'method':'GET',
        'headers': {'x-apikey': API_KEY}
      })
      const data = await response.json()
      // update state -- configured earlier.
      setLoading(false);
    }
    fetchData();
  }, [])

  if(loading){
    return(<>
    <div className='justify-center text-center items-center'>
      Loading...
    </div>
    <ParticleBackground />
    </>)
  }
  else {
    if (session) {
      router.push('/todos')
    }
    else {
      return(<>
      <div className="backdrop">
        <Navbar />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 pt-60">
          <div className="group relative items-center justify-center overflow-hidden text-center">Hello</div>
          <div className="group relative items-center justify-center overflow-hidden text-center my-auto mx-auto"><img src='astro.svg' width={'300'} height={'300'}></img></div>
        </div>
      </div>
      <ParticleBackground />
      </>)
    }
  }
}
