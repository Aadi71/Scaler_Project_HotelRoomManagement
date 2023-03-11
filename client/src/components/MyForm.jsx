import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="input" required>Enter your name:
        <input
          type="text"
          name="username"
          value={inputs.username || ""}
          onChange={handleChange}
        />
        <br />
      </label>
      <label className="input" required>Enter your email:
        <input
          type="text"
          name="email"
          value={inputs.email || ""}
          onChange={handleChange}
        />
      </label>
      <br />
      <label className="input" required>Enter start time:
        <input
          type="datetime-local"
          name="start_time"
          value={inputs.start_time || ""}
          onChange={handleChange}
        />
      </label>
      <br />
      <label className="input" required>Enter end time:
        <input
          type="datetime-local"
          name="end_time"
          value={inputs.end_time || ""}
          onChange={handleChange}
        />
      </label>
      <br />
      <label className="input" required>Enter Room Type:
        <select name="room_type" id="room_type">
          <option value="" selected disabled>Please select an option...</option>

          <option value="A">A(100/hr)</option>
          <option value="B">B(80/hr)</option>
          <option value="B">A(50/hr)</option>
        </select>
      </label>
      <br />
      <input type="submit" className="submit" value="Get Recommendations" />
    </form>
  )
}

export default MyForm;