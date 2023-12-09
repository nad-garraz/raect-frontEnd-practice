import { useState } from 'react';

const Form = ({ addItem }) => {
  const [newItemName, setNewItemName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    newItemName && addItem(newItemName);
    setNewItemName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="add items"
        value={newItemName}
        onChange={(event) => setNewItemName(event.target.value)}
      />
      <button type="submit">add Item</button>
    </form>
  );
};

export default Form;
