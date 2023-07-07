import { addProductToDatabase } from '../../actions/serverActions';
import AddProductButton from '../../components/ AddProductButton';
import { Product } from '../../typings';

export default async function Home() {
  const res = await fetch(
    'https://64a7bf8fdca581464b84b537.mockapi.io/products',
    {
      cache: 'no-cache',
      next: {
        tags: ['products'],
      },
    }
  );

  const products: Product[] = await res.json();

  return (
    <main className='flex flex-col items-center justify-between'>
      <h1 className='text-3xl font-bold text-center'>Products Warehouse</h1>
      <AddProductButton />

      <form
        action={addProductToDatabase}
        className='flex flex-col gap-5 max-w-xl mx-auto p-5'
      >
        <input
          name='product'
          type='text'
          className='border border-gray-300 p-2 rounded-md'
          placeholder='Enter product name ...'
        />
        <input
          name='price'
          type='text'
          className='border border-gray-300 p-2 rounded-md'
          placeholder='Enter price...'
        />
        <button className='border'>Add product</button>
      </form>

      <h2 className='font-bold p-5'>List of products</h2>

      <div className='flex flex-wrap gap-5'>
        {products.map((product) => (
          <div key={product.id} className='p-5 shadow'>
            <p>{product.product}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
