const ProductCard = ({ product }: { product: any }) => {
  return (
    <li>
      <div>{product.title}</div>
    </li>
  );
};

export default ProductCard;
