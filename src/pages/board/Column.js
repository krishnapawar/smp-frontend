import React from 'react';
import Card from '../../components/Card';
const Column = ({ column, onDragStart}) => {
  return (
    <div className="mt-2 ">
      {column.cards.map((card) => (
        <div
          key={card.id}
          className="card mb-3"
          draggable
          onDragStart={(e) => onDragStart(e, card, column.id)}
        >
         <Card card={card} />
         
        </div>
      ))}
    </div>
  );
};

export default Column;
