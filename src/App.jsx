import { useState } from "react";
import './categories.styles.scss'

function App() {
  const [count, setCount] = useState(0);
  const categories = [
     {
      id: 1,
      title: 'Hatter',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    },
    {
      id: 2,
      title: 'Jakker',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    },
    {
      id: 3,
      title: 'Sko',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    },
    {
      id: 4,
      title: 'Damer',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    },
    {
      id: 5,
      title: 'Menn',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    },
  ];

  return (
    <>
      <div className="categories-container">
        {categories.map(({ title, id,imageUrl }) => (
          <div key={id} className="category-container">
            <div className="category-body-container">
              <div className="background-image" style={{ backgroundImage: `url(${imageUrl})`, }}></div>
              <h2>{title}</h2>
              <p>Kjøp nå</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
