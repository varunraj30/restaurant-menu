import React,{useState} from 'react'
import Categories from './Categories'
import Menu from "./Menu";
import items from "./data";

const App = () => {
  
  const allCategories = items.map(item => item.category)
  
  const uniqueElements = new Set(allCategories)

  const categories = ['all',...uniqueElements]

  const [menuItems, setMenuItems] = useState(items)

  const filterItems = (category) => {
    if(category==='all') {
      setMenuItems(items)
      return
    } else {
      setMenuItems(items.filter(item => {
        return item.category === category
      }))
    }
  }


  return (
     <div>
      <main>
        <section className="menu section">
          <div className="title">
            <h2>Our Menu</h2>
            <div className="underline">
            </div>
          </div>
          <Categories categories={categories} filterItems={filterItems}/>
          <Menu items={menuItems}/>
        </section>
      </main>
    </div>
  );
}

export default App;
