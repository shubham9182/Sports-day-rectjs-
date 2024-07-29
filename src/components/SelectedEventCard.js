// src/components/SelectedEventCard.js
import React from 'react';

const SelectedEventCard = ({ event, onDeselect }) => {
    return (
        <div className="selected-event-card">
            <h3>{event.event_name}</h3>
            <button onClick={() => onDeselect(event.id)}>Deselect</button>
        </div>
    );
};

export default SelectedEventCard;
