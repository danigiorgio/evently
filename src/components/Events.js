import styled from '@emotion/styled';
import React from 'react';
import { CardDeck } from 'react-bootstrap';

import EventItem from './EventItem';

const StyledCardDeck = styled(CardDeck)`
  margin-top: 10px;
  margin-left: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  justify-items: center;
  grid-gap: 0.5rem;
`;

const StyledTitle = styled.h1`
  font-size: 1.8em;
  font-weight: 400;
  text-align: center;
  margin: 2rem 0;
`;

const StyledCategTitle = styled.h2`
  font-size: 1.5em;
  margin: 2.5rem 0;
  text-align: center;
`;

const Category = ({ events, categoryId, title, setNewEvents }) => {
  const filteredEvents = events
    .slice(5)
    .filter(event => event.categoryId === categoryId);

  return (
    <>
      <StyledCategTitle>{title}</StyledCategTitle>
      <StyledCardDeck>
        {filteredEvents.length === 0 ? (
          <div className="text-center">
            Sorry, there are no events yet. Stay tuned!
          </div>
        ) : (
          filteredEvents.map((filteredEvent, i) => (
            <EventItem key={i} {...filteredEvent} setNewEvents={setNewEvents} />
          ))
        )}
      </StyledCardDeck>
    </>
  );
};

function Events({ events, setNewEvents }) {
  return (
    <>
      <section className="container mt-5">
        <StyledTitle>Upcoming 5 events</StyledTitle>

        <StyledCardDeck>
          {events.slice(0, 5).map((event, i) => (
            <EventItem key={i} {...event} setNewEvents={setNewEvents} />
          ))}
        </StyledCardDeck>

        <Category title="Work" events={events} categoryId="Work" />

        <Category title="Sportive" events={events} categoryId="Sportive" />

        <Category title="Lunches" events={events} categoryId="Lunches" />

        <Category
          title="Voluntary Service"
          events={events}
          categoryId="Voluntary Service"
        />
      </section>
    </>
  );
}

export default Events;
