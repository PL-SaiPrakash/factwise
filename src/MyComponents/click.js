import React from 'react';

const Click = ({ value, onClick }) => {
  return (
    <button className="click" onClick={onClick}>
      {value}
    </button>
  );
};

export default Click;
