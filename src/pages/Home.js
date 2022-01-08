//Dependencies
import React from 'react';

//Components
import Listing from '../components/Listing.js';

const Home = ({events}) => {

  const loading = () => {
    return <h3>Loading...</h3>
  }

  const loaded = () => {
    return events.map((event) => <Listing key={event.id} event={event}/>)
  }

  return (
    <div id="welcomeBlock">
      <ul>
        {events ? loaded() : loading()}
      </ul>
    </div>
  )
}

export default Home;
