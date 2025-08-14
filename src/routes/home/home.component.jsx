import { Outlet } from 'react-router-dom'
import Directory from '../../components/directory/directory-component'
import '../../components/category-item/category-item.style.scss'


function Home() {
 
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
        <div>
            <Directory categories={categories} />
            <Outlet/>
      </div>
    
     
    
  );
}

export default Home;
