import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './components/Product';


export interface IProduct {
  id: number;
  title: string;
  price: number;
}

function App() {
  const [products, setProducts] = useState<IProduct[]>([
    {
      id: 1,
      title: 'Iphone',
      price: 80000
    },
    {
      id: 2,
      title: 'MacBook',
      price: 1300000
    }
  ]);

  function handleAddToCart(id: number) {
    console.log('Clicked', id);
    
  }

  return (
    <>
      {
        products.map(product =>
          <Product
            product={product}
            key={product.id}
            handleAddToCartClick={handleAddToCart}
          />
        )}
    </>
  );
}

export default App;
