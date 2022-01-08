import React from 'react';
import { Link } from 'react-router-dom';

const Listing = ({event}) => {

  return (
    <li><Link to={`/events/${event.id}`} style={{color: "black", textDecoration: "none"}}>{event.title}</Link></li>
  )
}

export default Listing;