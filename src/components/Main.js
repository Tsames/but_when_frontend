//Dependencies
import React from 'react';
import { Route, Link, Switch } from "react-router-dom";

//Components - No Auth
import Home from '../pages/no_auth/Home.js';
import ViewEvent from '../pages/no_auth/ViewEvent.js';
import ViewEventResults from '../pages/no_auth/ViewEventResults.js';
import SubmitAvailability from '../pages/no_auth/SubmitAvailability.js';

//Components - Req Auth
import CreateEvent from '../pages/req_auth/CreateEvent.js';
import EditCreatedEvent from '../pages/req_auth/EditCreatedEvent.js';
import ViewAllCreated from '../pages/req_auth/ViewAllCreated.js';

const Main = (props) => {

  //Set Event & Corresponding Availabilities in State
  const [event, setEvent] = React.useState(null);
  const [availabilities, SetAvailabilities] = React.useState(null)

  //Twin Functions for Constructing Relevant API Routes
  const getEventUrl = (eventId) => {
    return(
      `https://but-when-backend.herokuapp.com/events/${eventId}`
    )
  }

  const getAvailUrl = (eventId) => {
    return (
      `https://but-when-backend.herokuapp.com/availabilities/${eventId}`
    )
  }

  //Get Event Data
  const getEventData = async (eventId) => {
    const apiUrl = getEventUrl(eventId);
    const response = await fetch(apiUrl);
    const data = await response.json();
    setEvent(data)
  };

  return (
  <div className="main">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/events/create" component={CreateEvent} />
        <Route exact path="/my_events" component={ViewAllCreated} />

        {/* <Route exact path="/events/:id" component={ViewEvent} event={event}/> */}

        <Route path="/events/:id" render={(routerProps) => (
          <ViewEvent {...routerProps} event={event} getEvent={getEventData}/>
        )}/>

        {/* <Route exact path="/events/:id/submit" component={SubmitAvailability} />
        <Route exact path="/events/:id/results" component={ViewEventResults} />
        <Route exact path="/events/:id/edit" component={EditCreatedEvent} /> */}
      </Switch>
    </div>
  )
}

export default Main;