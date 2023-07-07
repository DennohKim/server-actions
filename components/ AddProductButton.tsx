'use client';

import React, { FC } from 'react';
import { addProductToDatabase } from '../actions/serverActions';

interface AddProductButtonProps {}

const AddProductButton: FC<AddProductButtonProps> = ({}) => {
  const [isPending, startTransition] = React.useTransition();

  const formData = new FormData();
  formData.append('product', 'redmi 8');
  formData.append('price', '100');

  return (
    <button
	className='fixed bottom-10 right-10 border bg-green-500 text-white p-2 rounded-md w-48'
      onClick={() => startTransition(() => addProductToDatabase(formData))}
    >
      {isPending ? 'Adding product...' : 'Add product'}
      
    </button>
  );
};

export default AddProductButton;
