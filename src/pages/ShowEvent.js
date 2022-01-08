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
      <div className="showBlock">
        <h2 className="showHeader">{event.title}</h2>
        <div className={"showDetails"}>
          <h6>{event.location}</h6>
          <h6>{event.day_range_start} - {event.day_range_end}</h6>
        </div>
        <p>{event.description}</p>
        <div className="showButtonBlock">
          <button onClick={deleteMe} className="showButton">Delete</button>
          <button className="showButton"><Link to={`/events/${id}/edit`} style={{ textDecoration: "none", color: "rgba(254, 250, 224, 1)"}}>Edit</Link></button>
        </div>
      </div>
    )
  }

  return (
    event ? loaded() : loading()
  )
}

export default ShowEvent;