import { useParams } from "react-router-dom"




export default function Registered () {

  const { teamID } = useParams()

  return (
    <div className='container'>El team Id de tu equipo es: {teamID}</div>
  )
}
