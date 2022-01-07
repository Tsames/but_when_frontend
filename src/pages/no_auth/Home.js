import React from 'react';
import { Redirect, Link } from 'react-router-dom';

const Home = (props) => {

  const [code, setCode] = React.useState("")

  const handleChange = (thing) => {
    setCode(thing.target.value)
  }

  return (
    <div id="welcomeBlock">
      <h1>Welcome to the "But When" App!</h1>
      <p>All created events are private to their organizers and those who they choose to share the link with. You must be logged in to create, update, or delete an event.</p>
      <input id="welcomeCode" name="welcomeCode" value={code} placeholder="Enter Event Code" onChange={handleChange} />
      <button className="submitButton"><Link to={`/events/${code}`} style={{ textDecoration: "none", color: "black" }}>Go</Link></button>
    </div>
  )
}

export default Home;
