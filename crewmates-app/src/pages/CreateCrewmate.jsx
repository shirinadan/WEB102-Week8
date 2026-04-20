import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabaseClient'

function CreateCrewmate() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    speed: '',
    color: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { error } = await supabase
      .from('crewmates')
      .insert([
        {
          name: formData.name,
          speed: formData.speed,
          color: formData.color,
          role: 'Crewmate',
          catchphrase: ''
        }
      ])
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

      <img
        className="create-image"
        src="https://static.wikia.nocookie.net/among-us-wiki/images/3/31/Red.png"
        alt="Crewmate"
      />

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
          <label><input type="radio" name="color" value="Orange" onChange={handleChange} /> Orange</label>
          <label><input type="radio" name="color" value="Pink" onChange={handleChange} /> Pink</label>
          <label><input type="radio" name="color" value="Rainbow" onChange={handleChange} /> Rainbow</label>
        </div>

        <div className="full-width-btn">
          <button type="submit">Create Crewmate</button>
        </div>
      </form>
    </div>
  )
}

export default CreateCrewmate