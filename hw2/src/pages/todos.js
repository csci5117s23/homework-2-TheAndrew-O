
import Link from 'next/link'
import ToDoList from './toDoList'


const todos = () => {
    return (<>
    <Link href={"/done"} >Completed Tasks</Link>
    <ToDoList/>
    </>)
}

export default todos