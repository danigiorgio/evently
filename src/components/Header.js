import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import styled from '@emotion/styled';

const StyledHeader = styled.header`
  background-color: #fff;
  box-shadow: 3px 3px 16px 0 #e8e8e8;
`;

function Header() {
  return (
    <StyledHeader>
      <Navbar
        expand="lg"
        className="navbar navbar-expand-lg justify-content-between">
        <Link to="/">
          <Navbar.Brand>Evently</Navbar.Brand>
        </Link>
        <Link to="/new" className="btn-salmon">
          Create Event +
        </Link>
      </Navbar>
    </StyledHeader>
  );
}

export default Header;
