import React from 'react';
import { Card } from 'react-bootstrap';
import { FiClock, FiMapPin } from 'react-icons/fi';
import styled from '@emotion/styled';

const StyledCard = styled(Card)`
  border: 0;
  border-radius: 15px;
  padding: 1rem;
  margin-bottom: 4rem;
  box-shadow: 3px 3px 15px 0 #e8e8e8;
  width: 20rem;
  color: rgb(70, 70, 70);
`;

const StyledTitle = styled(Card.Title)`
  margin: 2rem 0;
  font-size: 1.15rem;
  text-align: center;
`;

const StyledText = styled.span`
  color: rgb(144 144 144);
`;

function EventItem({ name, description, location, date }) {
  return (
    <StyledCard className="mb-5">
      <Card.Body>
        <StyledTitle>{name}</StyledTitle>
        <span>
          Description:
          <StyledText> {description}</StyledText>
          <hr />
        </span>
        <Card.Text>
          <FiMapPin />
          <StyledText>{location}</StyledText>
        </Card.Text>
        <Card.Text>
          <FiClock />
          <StyledText>{date}</StyledText>
        </Card.Text>
      </Card.Body>
    </StyledCard>
  );
}

export default EventItem;
