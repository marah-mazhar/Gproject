import React from 'react';
import { useParams } from 'react-router-dom';

function Predict() {
  // Access the 'id' parameter from the route
  const { id } = useParams();

  // Use the 'id' in your component logic
  // ...

  return (
    <div>
      <h2>Predict Page for Product ID: {id}</h2>
      {/* Add your Predict component content here */}
    </div>
  );
}

export default Predict;

