import Link from "next/link"

function PageNotFound() {
    return (<>
    <h1>You seem lost...</h1>
    <Link href={"/todos"} >Go back to safety</Link>
    </>)
}

export default PageNotFound