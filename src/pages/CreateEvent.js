import React from 'react';
import { useState } from 'react';

const CreateEvent = ({history, createEvent}) => {

  //Declare Edit Form in State
  const [form, setForm] = useState({
    title: "",
    location: "",
    description: "",
    day_range_start: "",
    day_range_end: "",
  });

  //Callbacks
  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createEvent(form);
    setForm({
      title: "",
      location: "",
      description: "",
      day_range_start: "",
      day_range_end: "",
    });
    history.push("/")
  };

  const createOption = () => {
    return <div className={"createBlock"}>
      <h1 className={"createHeading"}>Create Event</h1>
      <div className="formCreate">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={form.title}
            name="title"
            placeholder="event name"
            onChange={handleChange}
          />
          <input
            type="text"
            value={form.location}
            name="location"
            placeholder="location"
            onChange={handleChange}
          />
          <input
            type="text"
            value={form.description}
            name="description"
            placeholder="description"
            onChange={handleChange}
          />
          <input
            type="date"
            value={form.date}
            name="date"
            placeholder="proposed date range start"
            onChange={handleChange}
          />
          <input
            type="date"
            value={form.date}
            name="date"
            placeholder="proposed date range end"
            onChange={handleChange}
          />
          <input type="submit" className="createButton" value="Create" />
        </form></div>
    </div>
  }

  return (
    <section>
      <div className="createBlock">
        {createOption()}
      </div>
    </section>
  );

}

export default CreateEvent;
