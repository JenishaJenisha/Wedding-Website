import  { useState } from "react";
import "./RSVP.css";

const RSVP = () => {
  const [form, setForm] = useState({ name: "", attending: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/rsvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
  
      if (response.ok) {
        alert('RSVP submitted successfully!');
        setForm({ name: '', attending: '' }); // Clear the form
      } else {
        alert('Failed to submit RSVP');
      }
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      alert('An error occurred while submitting your RSVP.');
    }
  };
  

  return (
    <div className="rsvp-page">
      <h2>RSVP</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />

        <label>Will you be attending?</label>
        <select
          value={form.attending}
          onChange={(e) => setForm({ ...form, attending: e.target.value })}
          required
        >
          <option value="">Select</option>
          <option value="yes">Yes, I will attend</option>
          <option value="no">Sorry, I can`t make it</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RSVP;
