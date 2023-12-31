'use server';

import { revalidateTag } from 'next/cache';
import { Product } from '../typings';

export const addProductToDatabase = async (e: FormData) => {
  const product = e.get('product')?.toString();
  const price = e.get('price')?.toString();

  if (!product || !price) return;

  const newProduct: Product = {
    product,
    price,
  };

  await fetch('https://64a7bf8fdca581464b84b537.mockapi.io/products', {
    method: 'POST',
    body: JSON.stringify(newProduct),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  revalidateTag('products');
};
