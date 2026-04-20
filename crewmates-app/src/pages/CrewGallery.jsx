import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import CrewmateCard from '../components/CrewmateCard'

function CrewGallery() {
  const [crewmates, setCrewmates] = useState([])

  useEffect(() => {
    const fetchCrewmates = async () => {
      const { data, error } = await supabase
        .from('crewmates')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        console.error(error)
      } else {
        setCrewmates(data)
      }
    }

    fetchCrewmates()
  }, [])

  return (
    <div className="page">
      <h1>Crew Gallery</h1>

      {crewmates.length === 0 ? (
        <p>No crewmates yet. Create one first.</p>
      ) : (
        <div className="gallery">
          {crewmates.map((mate) => (
            <CrewmateCard key={mate.id} mate={mate} />
          ))}
        </div>
      )}
    </div>
  )
}

export default CrewGallery