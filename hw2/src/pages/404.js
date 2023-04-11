import ParticleBackground from "@/components/ParticleBackground"
import Link from "next/link"

function PageNotFound() {
    return (<>
    <div className="backdrop">
        <h1 className="text-center justify-center items-center pt-20">You seem lost...</h1>
        <div className="text-center justify-center items-center pt-40">
            <Link href={"/todos"} >Go back to safety</Link>
        </div>
    </div>
    <ParticleBackground />
    </>)
}

export default PageNotFound