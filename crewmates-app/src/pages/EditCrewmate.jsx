import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { supabase } from '../lib/supabaseClient'

function EditCrewmate() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    speed: '',
    color: '',
    role: '',
    catchphrase: ''
  })

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
        setFormData(data)
      }
    }

    fetchMate()
  }, [id])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleUpdate = async (e) => {
    e.preventDefault()

    const { error } = await supabase
      .from('crewmates')
      .update({
        name: formData.name,
        speed: formData.speed,
        color: formData.color,
        role: formData.role,
        catchphrase: formData.catchphrase
      })
      .eq('id', id)
      .select()

    if (error) {
      console.error(error)
      alert('Error updating crewmate')
      return
    }

    navigate(`/crew/${id}`)
  }

  const handleDelete = async () => {
    const { error } = await supabase
      .from('crewmates')
      .delete()
      .eq('id', id)

    if (error) {
      console.error(error)
      alert('Error deleting crewmate')
      return
    }

    navigate('/crew')
  }

  return (
    <div className="page">
      <h1>Edit Crewmate</h1>

      <form className="form" onSubmit={handleUpdate}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Speed</label>
        <select
          name="speed"
          value={formData.speed}
          onChange={handleChange}
          required
        >
          <option value="Slow">Slow</option>
          <option value="Medium">Medium</option>
          <option value="Fast">Fast</option>
        </select>

        <label>Color</label>
        <select
          name="color"
          value={formData.color}
          onChange={handleChange}
          required
        >
          <option value="Red">Red</option>
          <option value="Blue">Blue</option>
          <option value="Green">Green</option>
          <option value="Purple">Purple</option>
          <option value="Yellow">Yellow</option>
        </select>

        <label>Role</label>
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
        >
          <option value="Pilot">Pilot</option>
          <option value="Engineer">Engineer</option>
          <option value="Medic">Medic</option>
          <option value="Scout">Scout</option>
        </select>

        <label>Catchphrase</label>
        <input
          type="text"
          name="catchphrase"
          value={formData.catchphrase || ''}
          onChange={handleChange}
        />

        <button type="submit">Update Crewmate</button>
      </form>

      <button className="delete-btn" onClick={handleDelete}>
        Delete Crewmate
      </button>
    </div>
  )
}

export default EditCrewmate