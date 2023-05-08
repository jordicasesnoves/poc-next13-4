'use client';

import { Dispatch, SetStateAction, createContext, useState } from 'react';

export const CartContext = createContext<{
  items: any[];
  setItems: Dispatch<SetStateAction<any[]>>;
}>({
  items: [],
  setItems: () => null,
});

export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [items, setItems] = useState<any[]>([]);
  const value = { items, setItems };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
