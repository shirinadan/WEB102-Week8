import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { supabase } from '../lib/supabaseClient'

function CrewmateDetail() {
  const { id } = useParams()
  const [mate, setMate] = useState(null)

  useEffect(() => {
    const fetchMate = async () => {
      const { data, error } = await supabase
        .from('crewmates')
        .select('*')
        .eq('id', id)
        .single()

      if (error) {
        console.error(error)
      } else {
        setMate(data)
      }
    }

    fetchMate()
  }, [id])

  if (!mate) {
    return <p className="page">Loading...</p>
  }

  return (
    <div className="page">
      <h1>{mate.name}</h1>
      <p><strong>Speed:</strong> {mate.speed}</p>
      <p><strong>Color:</strong> {mate.color}</p>
      <p><strong>Role:</strong> {mate.role}</p>
      <p><strong>Catchphrase:</strong> {mate.catchphrase || 'None'}</p>

      <Link to={`/crew/${mate.id}/edit`}>
        <button>Edit This Crewmate</button>
      </Link>
    </div>
  )
}

export default CrewmateDetail