
import DoneItems from "@/components/doneItems"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useSession } from "next-auth/react"
import Navbar from "@/components/Navbar"
import ParticleBackground from "@/components/ParticleBackground"

const Done = () => {
    const router = useRouter()
    const {data: session, status} = useSession()

    useEffect(() => {
        if(!session) {
          router.push("/")
        }
    }, [session, router])

    if(session){
        return (<>
            <Navbar tab={2}/>
            <DoneItems />
            <div className="backparticles"><ParticleBackground/></div>
        </>)
    }
    else {

    }
}

export default Done