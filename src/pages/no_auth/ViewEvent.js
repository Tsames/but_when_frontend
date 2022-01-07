//Dependencies
import React from 'react';
import { Link } from "react-router-dom";

const ViewEvent = (props) => {

  console.log(props)

  //Grab Event Id
  const eventId = props.match.params.id

  //Correct State If Event is Null or Does Not Match Id from Route
  if (props.event == null || eventId != props.event.id) {
    props.getEvent(eventId);
  }

  //Loading and Loaded Versions of
  const loading = () => {
    return(
      <h1>Loading...</h1>
    )
  }

  const loaded = () => {
    return(
      <div>
        <h2>{props.event.title}</h2>
        <h6>{props.event.location}</h6>
        <p>{props.event.description}</p>
        <button><Link to={`/events/${eventId}/submit`} textDecoration="none">Submit Availability</Link></button>
        <button><Link to={`/events/${eventId}/results`} textDecoration="none">See Results</Link></button>
      </div>
    )
  }

  return (
    props.event != null ? loaded() : loading()
  )
}

export default ViewEvent;