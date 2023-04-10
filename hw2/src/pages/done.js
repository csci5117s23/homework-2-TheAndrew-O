
import DoneItems from "@/components/doneItems"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useSession } from "next-auth/react"

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
            <Link href={"/todos"} >Return to ToDo List</Link>
            <DoneItems />
        </>)
    }
    else {

    }
}

export default Done