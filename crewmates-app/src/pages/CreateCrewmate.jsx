import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabaseClient'

const roleOptions = {
  Space: ['Pilot', 'Engineer', 'Medic', 'Scout'],
  Fantasy: ['Wizard', 'Knight', 'Healer', 'Rogue'],
  Tech: ['Frontend Dev', 'Backend Dev', 'Designer', 'Product Manager']
}

function CreateCrewmate() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    speed: '',
    color: '',
    category: '',
    role: '',
    catchphrase: ''
  })

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

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { error } = await supabase
      .from('crewmates')
      .insert([formData])
      .select()

    if (error) {
      console.error(error)
      alert('Error creating crewmate')
      return
    }

    navigate('/crew')
  }

  return (
    <div className="create-page">
      <h1>Create a New Crewmate</h1>

      <form className="create-form" onSubmit={handleSubmit}>
        <div className="form-box">
          <h3>Name:</h3>
          <input
            type="text"
            name="name"
            placeholder="Enter crewmate's name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-box">
          <h3>Speed (mph):</h3>
          <input
            type="text"
            name="speed"
            placeholder="Enter speed in mph"
            value={formData.speed}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-box">
          <h3>Color:</h3>
          <label><input type="radio" name="color" value="Red" onChange={handleChange} /> Red</label>
          <label><input type="radio" name="color" value="Green" onChange={handleChange} /> Green</label>
          <label><input type="radio" name="color" value="Blue" onChange={handleChange} /> Blue</label>
          <label><input type="radio" name="color" value="Purple" onChange={handleChange} /> Purple</label>
          <label><input type="radio" name="color" value="Yellow" onChange={handleChange} /> Yellow</label>
          <label><input type="radio" name="color" value="Pink" onChange={handleChange} /> Pink</label>
        </div>

        <div className="form-box">
          <h3>Category:</h3>
          <label><input type="radio" name="category" value="Space" onChange={handleChange} /> Space</label>
          <label><input type="radio" name="category" value="Fantasy" onChange={handleChange} /> Fantasy</label>
          <label><input type="radio" name="category" value="Tech" onChange={handleChange} /> Tech</label>
        </div>

        <div className="form-box">
          <h3>Role:</h3>
          {formData.category ? (
            roleOptions[formData.category].map((role) => (
              <label key={role}>
                <input
                  type="radio"
                  name="role"
                  value={role}
                  checked={formData.role === role}
                  onChange={handleChange}
                />
                {role}
              </label>
            ))
          ) : (
            <p>Select a category first</p>
          )}
        </div>

        <div className="full-width-btn">
          <button type="submit">Create Crewmate</button>
        </div>
      </form>
    </div>
  )
}

export default CreateCrewmate