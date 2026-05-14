import React from 'react'

function Employee({name,age}) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{age}</p>
    </div>
  );
}

export default Employee;
