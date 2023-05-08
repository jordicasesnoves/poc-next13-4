import ProductInfo from '@/components/ProductInfo';
import RelatedProducts from '@/components/RelatedProducts';
import { Suspense } from 'react';

const Spinner = () => (
  <img src="https://raw.githubusercontent.com/n3r4zzurr0/svg-spinners/main/preview/90-ring-black-36.svg" />
);

const ProductPage = async ({ params }: { params: { id: string } }) => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <div className="h-1/2">
        <Suspense fallback={<Spinner />}>
          {/* @ts-expect-error Server Component */}
          <ProductInfo productId={params.id} />
        </Suspense>
      </div>
      <div className="h-1/2">
        <Suspense fallback={<Spinner />}>
          {/* @ts-expect-error Server Component */}
          <RelatedProducts />
        </Suspense>
      </div>
    </div>
  );
};

export default ProductPage;
