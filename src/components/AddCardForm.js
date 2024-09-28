import React, { useState } from 'react';

const AddCardForm = ({ columnId }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddCard = (e) => {
    e.preventDefault();
    // Logic to add the card to the corresponding column
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleAddCard}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Card Title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Card Description"
      />
      <button type="submit">Add Card</button>
    </form>
  );
};

export default AddCardForm;
