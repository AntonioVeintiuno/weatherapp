import React from 'react';

const Location = ({city}) => (
  // destructurin
  // const { city } =  props
  // const city = props.city
    <div>
      <h1>
        {city}
      </h1>
    </div>
);

export default Location;