import AddToCartButton from './AddToCartButton';
import Image from 'next/image';

const getInfo = async (productId: string) => {
  const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

const ProductInfo = async ({ productId }: { productId: string }) => {
  const product = await getInfo(productId);
  return (
    <div className="flex gap-x-24">
      <div className="w-1/2 relative max-h-[400px]">
        <Image
          className="object-contain"
          src={product.image}
          fill
          alt={product.title}
        />
      </div>
      <div className="flex flex-col gap-y-2 w-1/2">
        <h1 className="text-4xl">{product.title}</h1>
        <span>{product.description}</span>
        <strong>{product.price} EUR</strong>
        <AddToCartButton product={product} />
      </div>
    </div>
  );
};

export default ProductInfo;
