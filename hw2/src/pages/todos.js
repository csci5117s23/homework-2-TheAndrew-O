
import Link from 'next/link'
import ToDoList from './toDoList'
import Navbar from '@/components/Navbar'
import ParticleBackground from '@/components/ParticleBackground'


const todos = () => {
    return (<>
    <Navbar />
    <div className='items-center justify-center text-center pt-10'>
        <Link href={"/done"} >Completed Tasks</Link>
        <ToDoList/>
    </div>
    <div className='backparticles'>
    <ParticleBackground />
    </div>
    </>)
}

export default todos