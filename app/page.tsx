import Link from 'next/link';

const getProducts = async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

export default async function Home() {
  const products = await getProducts();
  return (
    <div className="w-full">
      <section>
        <ul>
          {products.map((product: any) => (
            <li key={product.id}>
              <Link href={`/product/${product.id}`}>{product.title}</Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
