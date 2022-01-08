import React from 'react';
import { useState } from 'react';

const EditEvent = ({ events, match, history, updateEvent }) => {

  //Grab Single Event
  const id = parseInt(match.params.id);
  const event = events.find((event) => event.id === id);

  //Declare Edit Form in State
  const [form, setForm] = useState({
    title: event.title,
    location: event.location,
    description: event.description,
    day_range_start: event.day_range_start,
    day_range_end: event.day_range_end,
  });

  //Callbacks
  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateEvent(form, id);
    setForm({
      title: "",
      location: "",
      description: "",
      day_range_start: "",
      day_range_end: "",
    });
    history.push("/")
  };

  const editOption = () => {
    return <div className={"createBlock"}>
      <h1 className={"updateHeading"}>Edit</h1>
      <div className="formCreate">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={form.title}
            name="title"
            onChange={handleChange}
          />
          <input
            type="text"
            value={form.location}
            name="location"
            onChange={handleChange}
          />
          <input
            type="text"
            value={form.description}
            name="description"
            onChange={handleChange}
          />
          <input
            type="date"
            value={form.date}
            name="date"
            onChange={handleChange}
          />
          <input
            type="date"
            value={form.date}
            name="date"
            onChange={handleChange}
          />
          <input type="submit" className="updateButton" value="Update" />
        </form></div>
    </div>
  }

  return (
    <section>
      <div className="EditBlock">
        {editOption()}
      </div>
    </section>
  );

}

export default EditEvent;