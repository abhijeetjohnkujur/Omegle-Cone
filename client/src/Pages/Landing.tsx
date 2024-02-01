import { useState } from "react"
import { Link } from "react-router-dom"

const Landing = () => {
  const [name,setName] = useState("")
  return (
    <>
      <input type="text" onChange={(event) => setName(event.target.value)} />
      <Link to={`/room/?name=${name}`} onClick={() => {}}>Join</Link>
    </>
  )
}

export default Landing