//Dependencies
import React from 'react';
import { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";

//Components
import Home from '../pages/Home.js';
import ShowEvent from '../pages/ShowEvent.js';
import CreateEvent from '../pages/CreateEvent.js';
import EditEvent from '../pages/EditEvent.js';


const Main = (props) => {

  //Set Event & Corresponding Availabilities in State
  const [events, setEvents] = useState(null);

  //Construct Relevant API Endpoint
  const getApiUrl = (eventId = null) => {
    if (eventId == null) {
      return "https://but-when-backend.herokuapp.com/events"
    } else {
      return `https://but-when-backend.herokuapp.com/events/${eventId}`
    }
  }

  //Get Event Data
  const getEventData = async (eventId) => {
    const apiUrl = getApiUrl(eventId);
    const response = await fetch(apiUrl);
    const data = await response.json();
    setEvents(data)
  };

  //Create Event
  const createEvent = async (event) => {
    await fetch(URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event),
    });
  };

  //Update Event
  const updateEvent = async (events, id) => {
    await fetch(URL + id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(events),
    })
    getEventData()
  }

  //Delete Event
  const deleteEvent = async (eventId) => {
    const apiUrl = getApiUrl(eventId);
    await fetch(apiUrl, {
      method: "delete",
    })
    getEventData()
  }

  useEffect(() => getEventData(), []);

  return (
  <div className="main">
      <Switch>
        <Route exact path="/" render={(routerProps) => (
          <Home {...routerProps} events={events} getEventData={getEventData}/>
        )} />
        <Route exact path="/events/create" render={(routerProps) => (
          <CreateEvent {...routerProps} events={events} createEvent={createEvent}/>
        )}/>
        <Route exact path="/events/:id" render={(routerProps) => (
          <ShowEvent {...routerProps} events={events} deleteEvent={deleteEvent}/>
        )} />
        <Route exact path="/events/:id/edit" render={(routerProps) => (
          <EditEvent {...routerProps} events={events} updateEvent={updateEvent}/>
        )} />
      </Switch>
    </div>
  )
}

export default Main;