import React from 'react';

const Dictionary = ({ definition }) => {
  return (
    <div className="definition">
      {definition && (
        <div>
          <p>{definition}</p>
        </div>
      )}
    </div>
  );
};

export default Dictionary;