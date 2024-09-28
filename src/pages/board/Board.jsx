import React, { useState } from 'react';
import Column from './Column';

const Board = () => {
  const [columns, setColumns] = useState([
    {
      id: 'column1',
      title: 'To Do',
      cards: [
        { id: 'card-1', title: 'Task 1', description: 'This is task 1', createdAt:"2024-08-25", userName:"test" },
        { id: 'card-2', title: 'Task 2', description: 'This is task 2', createdAt:"2024-08-25", userName:"test" },
      ],
    },
    {
      id: 'column2',
      title: 'In Progress',
      cards: [
        { id: 'card-3', title: 'Task 3', description: 'This is task 3', createdAt:"2024-08-25", userName:"test" },
      ],
    },
    {
      id: 'column3',
      title: 'In Review',
      cards: [
        { id: 'card-4', title: 'Task 4', description: 'This is task 4', createdAt:"2024-08-25", userName:"test" },
      ],
    },
    {
      id: 'column4',
      title: 'Done',
      cards: [
        { id: 'card-5', title: 'Task 5', description: 'This is task 5', createdAt:"2024-08-25", userName:"test" },
      ],
    },
  ]);

  const onDragStart = (e, card, fromColumnId) => {
    e.dataTransfer.setData('cardId', card.id);
    e.dataTransfer.setData('fromColumnId', fromColumnId);
  };

  const onDragOver = (e) => {
    e.preventDefault(); // Allow dropping by preventing the default handling
  };

  const onDrop = (e, toColumnId) => {
    const cardId = e.dataTransfer.getData('cardId');
    const fromColumnId = e.dataTransfer.getData('fromColumnId');

    if (toColumnId === fromColumnId) return; // No need to move if it's the same column

    setColumns((prevColumns) => {
      const updatedColumns = prevColumns.map((column) => {
        if (column.id === fromColumnId) {
          return {
            ...column,
            cards: column.cards.filter((card) => card.id !== cardId),
          };
        } else if (column.id === toColumnId) {
          const cardToMove = prevColumns
            .find((col) => col.id === fromColumnId)
            .cards.find((card) => card.id === cardId);//get moved card data in cardToMove
          return {
            ...column,
            cards: [...column.cards, cardToMove],
          };
        }
        return column;
      });

      return updatedColumns;
    });
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {columns.map((column) => (
          <div key={column.id} className="col-md-3">
            <div
              className="card mb-4 mt-4 shadow-sm"
              onDragOver={onDragOver}
              onDrop={(e) => onDrop(e, column.id)}
            >
              <div>
                <h5 className="card-title">{column.title} { column.cards.length ?? 0 }</h5>
                <Column column={column} onDragStart={onDragStart} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;
