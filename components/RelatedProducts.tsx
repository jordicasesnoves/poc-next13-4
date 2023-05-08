import ProductCard from './ProductCard';

const getProducts = async () => {
  const res = await fetch(
    'https://fakestoreapi.com/products?limit=5&sort=desc'
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

const RelatedProducts = async (): Promise<JSX.Element> => {
  const products = await getProducts();
  if (!products) return <div />;
  return (
    <div>
      <h1 className="text-5xl font-medium mb-8">Related products</h1>
      <ul>
        {products.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default RelatedProducts;
