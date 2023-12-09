import { nanoid } from 'nanoid';
import { useState } from 'react';
import Form from './components/Form';
import Items from './components/Items';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

// El Bloque se puede escribir en una línea
// como se ve en ```const defaultList...```
// const getLocalStorage = () => {
//   let list = localStorage.getItem('list')
//   if (list) {
// list = JSON.parse(localStorage.getItem('list'))
// }
//   else {
//     list = [];
//   }
//   console.log(list);
//   return list;
// }

const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items));
};

const defaultList = JSON.parse(localStorage.getItem('list') || '[]');

const App = () => {
  // const [items, setItems] = useState(getLocalStorage());
  const [items, setItems] = useState(defaultList);

  const addItem = (newItemName) => {
    const newItem = {
      id: nanoid(),
      name: newItemName,
      completed: false,
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
    toast('🦄 Item added!', {
      position: 'top-right',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  };

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => {
      return item.id !== itemId;
    });
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('item removed successfully');
  };

  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };

  return (
    <main className='section-center'>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <h1>Grocery Bud</h1>
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
    </main>
  );
};

export default App;
