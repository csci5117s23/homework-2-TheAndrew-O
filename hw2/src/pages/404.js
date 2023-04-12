import ParticleBackground from "@/components/ParticleBackground"
import Link from "next/link"

function PageNotFound() {
    return (<>
    <div className="justify-center justify-items-center justify-self-center">
        <h1 className="text-center justify-center items-center pt-20">You seem lost...</h1>
        <div className="flex justify-center justify-items-center text-center justify-self-center content-center mt-10">
            <img src='/ufo.svg' width={'200'} height={'200'} className="justify-center justify-self-center"></img>
        </div>
        <div className="flex justify-center justify-items-center text-center justify-self-center content-center mt-1">
            <img src='/float_astro.svg' width={'100'} height={'100'} className="motion-safe:animate-[bounce_4s_ease-in-out_infinite]"></img>
        </div>
        <div className="text-center justify-center items-center pt-20">
            <Link href={"/todos"} className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300">Go back to safety</Link>
        </div>
    </div>
    <div className="backparticles"><ParticleBackground /></div>
    </>)
}

export default PageNotFound