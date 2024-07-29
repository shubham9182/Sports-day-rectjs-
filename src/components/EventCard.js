// src/components/EventCard.js
import React from 'react';
import './EventCard.css';

const EventCard = ({ event, onSelect }) => {
    return (
        <div className="event-card">
            <h3>{event.event_name}</h3>
            <p>Category: {event.event_category}</p>
            <p>Time: {event.start_time} - {event.end_time}</p>
            <button onClick={() => onSelect(event)}>Select</button>
        </div>
    );
};

export default EventCard;

