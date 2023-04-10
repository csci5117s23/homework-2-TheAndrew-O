
import Link from 'next/link'
import ToDoList from './toDoList'
import Navbar from '@/components/Navbar'


const todos = () => {
    return (<>
    <Navbar />
    <Link href={"/done"} >Completed Tasks</Link>
    <ToDoList/>
    </>)
}

export default todos