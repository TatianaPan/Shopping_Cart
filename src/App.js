import React from 'react';
import Navbar from '../src/components/Navbar'
import ShopList from './containers/ShopList';
import Cart from './containers/Cart';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <ShopList />
        <Cart />
      </div>
      
    </div>
  );
}

export default App;
