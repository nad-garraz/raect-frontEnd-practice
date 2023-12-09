import { useState } from 'react';
import menu from './data';
import Title from './Title';
import Menu from './Menu';
import Categories from './Categories';

// const tempCategories =
// const tempSet = new Set(tempCategories);
// const tempItems = ['all', ... tempSet]

const allCategories = ['all', ...new Set(menu.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  // const [categories, setCategories] = useState(allCategories);
// category from the button clicken in Categories component
  // filters the menu to display
  const displayCategory = (category) => {
    category === 'all'
      ? setMenuItems(menu)
      : setMenuItems(menu.filter((item) => item.category === category));
  };

  return (
    <main>
      <section className="menu">
        <Title text={'our menu'} />
        <Categories categories={allCategories} displayCategory={displayCategory} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};
export default App;
