
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
    <div className='justify-center text-center items-center align-middle'>
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
        <Navbar tab={0}/>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 pt-60">
          <div className="group relative items-center justify-center overflow-hidden text-center my-auto mx-auto">
            <blockquote class="text-2xl font-semibold italic text-center text-slate-200">
              What?ToDo! is the&nbsp;
              <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-yellow-500 relative inline-block">
                <span class="relative text-white">perfect</span>
              </span>
              &nbsp;tool for anyone who needs to keep track of their tasks. Its simple and easy-to-use interface gives you a visual representation of your to-do list, so you can focus on what's important.
            </blockquote>
          </div>
          <div className="group relative items-center justify-center overflow-hidden text-center my-auto mx-auto"><img src='astro.svg' width={'300'} height={'300'}></img></div>
        </div>
      </div>
      <ParticleBackground />
      </>)
    }
  }
}
