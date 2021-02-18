import styled from '@emotion/styled';
import axios from 'axios';
import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

import Error from './Error';

const StyledForm = styled.form`
  @media screen and (min-width: 992px) {
    margin: 0 13rem;
  }
`;

const StyledButton = styled.button`
  padding: 3px 12px;
`;

const StyledTitle = styled.h2`
  font-size: 1.5em;
  margin: 2rem 0;
`;

function AddEvent({ setNewEvents }) {
  const [name, saveName] = useState('');
  const [description, saveDescription] = useState('');
  const [location, saveLocation] = useState('');
  const [date, saveDate] = useState('');
  const [categoryId, saveCategory] = useState('');
  const [error, setError] = useState(false);

  const readValueRadio = e => {
    saveCategory(e.target.value);
  };

  const history = useHistory();

  const handleSubmit = async e => {
    e.preventDefault();

    if (name === '' || description === '' || categoryId === '') {
      setError(true);
      return;
    }

    setError(false);

    try {
      const res = await axios.post(
        'https://json-server-evently.herokuapp.com/events',
        //for local use: http://localhost:3001/events
        {
          name,
          description,
          location,
          date,
          categoryId,
        },
      );
      if (res.status === 201) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your event has been successfully added.',
          showConfirmButton: false,
          timer: 2000,
        });
      }
    } catch (err) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Something went wrong.',
        text: 'There was an error. The event was not added.',
        showConfirmButton: false,
        timer: 3000,
      });
    }
    setNewEvents(true);
    history.push('/');
  };

  return (
    <Container fluid="sm">
      <Row>
        <Col xs={12} md={12}>
          <StyledForm onSubmit={handleSubmit}>
            <StyledTitle>Add New Event</StyledTitle>
            {error ? <Error message="All fields are required." /> : null}
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={name}
                placeholder="Enter name"
                autoFocus
                onChange={e => saveName(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                type="text"
                value={description}
                name="description"
                placeholder="Enter description"
                onChange={e => saveDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                name="location"
                value={location}
                placeholder="Enter location"
                onChange={e => saveLocation(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={date}
                placeholder="YYYY-MM-DD"
                onChange={e => saveDate(e.target.value)}
              />
            </Form.Group>
            <Form.Label>Category</Form.Label>
            <Form.Group>
              <Form.Check
                inline
                type="radio"
                name="categoryId"
                value="Work"
                onChange={readValueRadio}
                label="Work"
              />
              <Form.Check
                inline
                type="radio"
                name="categoryId"
                value="Sportive"
                onChange={readValueRadio}
                label="Sportive"
              />
              <Form.Check
                inline
                type="radio"
                name="categoryId"
                value="Lunches"
                onChange={readValueRadio}
                label="Lunches"
              />
              <Form.Check
                inline
                type="radio"
                name="categoryId"
                value="Voluntary Service"
                onChange={readValueRadio}
                label="Voluntary Service"
              />
            </Form.Group>
            <div className="modal-footer">
              <StyledButton className="btn-salmon" type="submit">
                Save
              </StyledButton>
            </div>
          </StyledForm>
        </Col>
      </Row>
    </Container>
  );
}

export default AddEvent;
