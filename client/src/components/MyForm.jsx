import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

  return (
    <form className = "form" onSubmit={handleSubmit}>
      <label className = "input">Enter your name:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      <br />
      </label>
      <label className = "input">Enter your email:
        <input 
          type="text" 
          name="email" 
          value={inputs.email || ""} 
          onChange={handleChange}
        />
        </label>
        <br />
        <label className = "input">Enter start time:
        <input 
          type="datetime-local" 
          name="start_time" 
          value={inputs.start_time || ""} 
          onChange={handleChange}
        />
        </label>
        <br />
        <label className = "input">Enter end time:
        <input 
          type="datetime-local" 
          name="end_time" 
          value={inputs.end_time || ""} 
          onChange={handleChange}
        />
        </label>
        <br />
        <input type="submit" className = "submit" value = "Get Recommendations"/>
    </form>
  )
}

export default MyForm;