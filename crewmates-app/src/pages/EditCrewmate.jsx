import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { supabase } from '../lib/supabaseClient'

const roleOptions = {
  Space: ['Pilot', 'Engineer', 'Medic', 'Scout'],
  Fantasy: ['Wizard', 'Knight', 'Healer', 'Rogue'],
  Tech: ['Frontend Dev', 'Backend Dev', 'Designer', 'Product Manager']
}

function EditCrewmate() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    speed: '',
    color: '',
    category: '',
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
    const { name, value } = e.target

    if (name === 'category') {
      setFormData({
        ...formData,
        category: value,
        role: ''
      })
    } else {
      setFormData({
        ...formData,
        [name]: value
      })
    }
  }

  const handleUpdate = async (e) => {
    e.preventDefault()

    const { error } = await supabase
      .from('crewmates')
      .update(formData)
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
    <div className="edit-page">
      <h1>Edit Crewmate</h1>

      <form className="edit-form" onSubmit={handleUpdate}>
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Speed</label>
        <input type="text" name="speed" value={formData.speed} onChange={handleChange} required />

        <label>Color</label>
        <input type="text" name="color" value={formData.color} onChange={handleChange} required />

        <label>Category</label>
        <select name="category" value={formData.category} onChange={handleChange} required>
          <option value="">Select category</option>
          <option value="Space">Space</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Tech">Tech</option>
        </select>

        <label>Role</label>
        <select name="role" value={formData.role} onChange={handleChange} required>
          <option value="">Select role</option>
          {formData.category &&
            roleOptions[formData.category].map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
        </select>

        <button type="submit">Update Crewmate</button>
      </form>

      <button className="delete-btn" onClick={handleDelete}>Delete Crewmate</button>
    </div>
  )
}

export default EditCrewmate