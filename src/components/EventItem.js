import styled from '@emotion/styled';
import axios from 'axios';
import React from 'react';
import { Card } from 'react-bootstrap';
import { FiClock, FiMapPin, FiTrash } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

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

const TrashIcon = styled(FiTrash)`
  cursor: pointer;
  align-self: flex-end;
`;

function EventItem({ id, name, description, location, date, setNewEvents }) {
  const history = useHistory();
  const handleDelete = async () => {
    try {
      if (id) {
        const res = await axios.delete(
          `https://json-server-evently.herokuapp.com/events/${id}`,
        );
        // For local set-up use: http://localhost:3001/events/${id}
        if (res.status === 200) {
          // TODO: Add delete confirmation message
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your event has been successfully deleted.',
            showConfirmButton: false,
            timer: 3000,
          });
        }
      }
    } catch (err) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Something went wrong.',
        text: 'There was an error. The event was not deleted.',
        showConfirmButton: false,
        timer: 3000,
      });
      console.error('failed', err);
    }
    setNewEvents(true);
    history.push('/');
  };

  return (
    <StyledCard className="mb-5">
      <Card.Body>
        <StyledTitle>{name}</StyledTitle>
        <span>
          Description: <StyledText>{description}</StyledText>
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
        <TrashIcon
          className="delete-icon"
          onClick={() => handleDelete(id)}
          alt="Delete event"
        />
      </Card.Body>
    </StyledCard>
  );
}

export default EventItem;
