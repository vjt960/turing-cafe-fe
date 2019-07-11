import React from 'react';
import './ResyContainer.css';

const ResyContainer = props => {
  const reservations = props.data.map(res => {
    const { name, date, time, guests, id } = res;
    return (
      <article key={`resFor${name}`}>
        <p>{name}</p>
        <p>{date}</p>
        <p>{time}</p>
        <p>{guests}</p>
        <button onClick={() => props.cancelRes(id)}>Cancel</button>
      </article>
    );
  });

  return <main>{reservations}</main>;
};

export default ResyContainer;
