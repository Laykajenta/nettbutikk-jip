import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const categories = [
    {
      id: 1,
      title: "Hatter",
    },
    {
      id: 2,
      title: "Sko",
    },
    {
      id: 3,
      title: "Jakker",
    },
    {
      id: 4,
      title: "Damer",
    },
    {
      id: 5,
      title: "Menn",
    },
  ];

  return (
    <>
      <div className="categories-container">
        {categories.map(({ title }) => (
          <div className="category-container">
            <div className="category-body-container">
              <div className="background-image"></div>
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
