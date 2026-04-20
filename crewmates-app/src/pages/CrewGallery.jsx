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

  const total = crewmates.length
  const fastCount = crewmates.filter((mate) => mate.speed.toLowerCase() === 'fast').length
  const fantasyCount = crewmates.filter((mate) => mate.category === 'Fantasy').length
  const techCount = crewmates.filter((mate) => mate.category === 'Tech').length
  const spaceCount = crewmates.filter((mate) => mate.category === 'Space').length

  const fastPercent = total > 0 ? Math.round((fastCount / total) * 100) : 0

  let successScore = 0
  crewmates.forEach((mate) => {
    if (mate.speed.toLowerCase() === 'fast') successScore += 20
    if (mate.role === 'Pilot' || mate.role === 'Wizard' || mate.role === 'Backend Dev') successScore += 15
    if (mate.color === 'Red' || mate.color === 'Blue') successScore += 5
  })

  let successMessage = 'Needs more training'
  let galleryClass = 'gallery-page'

  if (successScore >= 80) {
    successMessage = 'Elite Crew'
    galleryClass = 'gallery-page elite'
  } else if (successScore >= 40) {
    successMessage = 'Promising Crew'
    galleryClass = 'gallery-page promising'
  }

  return (
    <div className={galleryClass}>
      <h1>Crewmate Gallery</h1>

      <div className="stats-panel">
        <h2>Crew Summary</h2>
        <p><strong>Total crewmates:</strong> {total}</p>
        <p><strong>Fast crewmates:</strong> {fastPercent}%</p>
        <p><strong>Space category:</strong> {spaceCount}</p>
        <p><strong>Fantasy category:</strong> {fantasyCount}</p>
        <p><strong>Tech category:</strong> {techCount}</p>
        <p><strong>Success score:</strong> {successScore}</p>
        <p><strong>Status:</strong> {successMessage}</p>
      </div>

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