import React from 'react';

const Error = ({ message }) => {
  return (
    <p className="alert alert-danger p3 text-center">
      <span role="img" aria-label="Error">
        ❌
      </span>{' '}
      {message}
    </p>
  );
};

export default Error;
