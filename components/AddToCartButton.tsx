'use client';

import { useContext } from 'react';
import Button from './Button';
import { CartContext } from './CartProvider';

const AddToCartButton = ({ product }: { product: any }) => {
  const value = useContext(CartContext);
  const { items, setItems } = value;

  const handleAddToCart = () => {
    setItems([...items, product]);
    alert('Item added to cart');
  };

  return <Button onClick={handleAddToCart}>Add to Cart</Button>;
};

export default AddToCartButton;
