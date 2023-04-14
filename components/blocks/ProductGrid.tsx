/* eslint-disable */
import Product from "./Product";

const ProductGrid = ({ products }: { products: any}) => {
  if (!products || products.length === 0) return null;

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product: any) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductGrid;
