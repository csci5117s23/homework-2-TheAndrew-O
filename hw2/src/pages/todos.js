
import Link from 'next/link'
import ToDoList from './toDoList'
import Navbar from '@/components/Navbar'
import ParticleBackground from '@/components/ParticleBackground'


const todos = () => {
    return (<>
    <Navbar tab={1}/>
    <div className='items-center justify-center text-center pt-10'>
        <ToDoList/>
    </div>
    <div className='backparticles'>
    <ParticleBackground />
    </div>
    </>)
}

export default todos