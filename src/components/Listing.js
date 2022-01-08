import React from 'react';
import { Link } from 'react-router-dom';

const Listing = ({event}) => {

  return (
    <li><Link to={`/events/${event.id}`}>{event.title}</Link></li>
  )
}

export default Listing;