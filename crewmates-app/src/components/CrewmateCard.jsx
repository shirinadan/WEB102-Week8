import { Link } from 'react-router-dom'

function CrewmateCard({ mate }) {
  return (
    <div className="card">
      <Link to={`/crew/${mate.id}`}>
        <h3>{mate.name}</h3>
      </Link>
      <p><strong>Speed:</strong> {mate.speed}</p>
      <p><strong>Color:</strong> {mate.color}</p>
      <p><strong>Category:</strong> {mate.category}</p>
      <p><strong>Role:</strong> {mate.role}</p>

      <Link to={`/crew/${mate.id}/edit`}>
        <button>Edit</button>
      </Link>
    </div>
  )
}

export default CrewmateCard