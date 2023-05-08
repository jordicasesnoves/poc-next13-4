'use client';

import Link from 'next/link';
import { useContext } from 'react';
import { CartContext } from './CartProvider';

const Navbar = () => {
  const cartContext = useContext(CartContext);
  return (
    <nav className="bg-slate-100 text-black px-24 py-6">
      <div className="flex justify-between w-full">
        <ul className="flex gap-x-12">
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="/cart">Cart ({`${cartContext.items.length}`})</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
