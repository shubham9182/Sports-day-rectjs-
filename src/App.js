// src/App.js
import React, { useState, useEffect } from 'react';
import EventList from './components/EventList';
import SelectedEventList from './components/SelectedEventList';
import mockData from './mockData';
import './App.css';

const App = () => {
    const [events, setEvents] = useState([]);
    const [selectedEvents, setSelectedEvents] = useState([]);

    useEffect(() => {
        // Fetch events from the mock data
        setEvents(mockData);
        
        // Load selected events from localStorage
        const savedEvents = JSON.parse(localStorage.getItem('selectedEvents')) || [];
        setSelectedEvents(savedEvents);
    }, []);

    useEffect(() => {
        // Save selected events to localStorage
        localStorage.setItem('selectedEvents', JSON.stringify(selectedEvents));
    }, [selectedEvents]);

    const handleSelectEvent = (event) => {
        if (selectedEvents.length >= 3) {
            alert('You can select a maximum of 3 events.');
            return;
        }

        const isConflicting = selectedEvents.some(selectedEvent => 
            (new Date(selectedEvent.start_time) < new Date(event.end_time)) &&
            (new Date(selectedEvent.end_time) > new Date(event.start_time))
        );

        if (isConflicting) {
            alert('This event conflicts with an already selected event.');
            return;
        }

        setSelectedEvents([...selectedEvents, event]);
    };

    const handleDeselectEvent = (eventId) => {
        setSelectedEvents(selectedEvents.filter(event => event.id !== eventId));
    };

    return (
        <div className="app-container">
            <div className="event-list-container">
                <h2>Available Events</h2>
                <EventList events={events} onSelect={handleSelectEvent} />
            </div>
            <div className="selected-event-list-container">
                <h2>Selected Events</h2>
                <SelectedEventList selectedEvents={selectedEvents} onDeselect={handleDeselectEvent} />
            </div>
        </div>
    );
};

export default App;
