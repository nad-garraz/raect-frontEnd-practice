const SingleItem = ({ item, removeItem, editItem}) => {
  const { name, id, completed } = item;

  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => editItem(id)}
      />
      <p style={{ textTransform: 'capitalize', textDecoration: completed && 'line-through' }} >
        {name}
      </p>
      <button type="button" onClick={() => removeItem(id)}>delete</button>
    </div>
  );
};

export default SingleItem;
