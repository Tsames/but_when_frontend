//Dependencies
import React from 'react';
import { Link, Redirect } from "react-router-dom";

const ShowEvent = ({match, events, deleteEvent}) => {

  const id = parseInt(match.params.id);
  const event = events.find((event) => event.id === id);

  //Loading and Loaded Versions of
  const loading = () => {
    return(
      <Redirect to="/"/>
    )
  }

  const deleteMe = () => {
    deleteEvent(id);
  }

  const loaded = () => {
    return(
      <div>
        <h2>{event.title}</h2>
        <h6>{event.location}</h6>
        <p>{event.description}</p>
        <button onClick={deleteMe} value="Delete"/>
        <Link to={`/events/${id}/edit`}>Edit</Link>
      </div>
    )
  }

  return (
    event ? loaded() : loading()
  )
}

export default ShowEvent;