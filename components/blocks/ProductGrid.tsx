/* eslint-disable */
import { Container } from "@components/modules/Container";
import Product from "./Product";
import { breakpoints } from "@utils/settings";
import React from "react";

const ProductGrid = ({ products }: { products: any}) => {
  if (!products || products.length === 0) return null;

  return (
    <section id="products" className="products">
      <h2 className="section-heading">Products</h2>
      <Container maxWidth={breakpoints.xxl}>
        <div className="product-grid">
          {products.map((product: any) => (
            <Product key={product.id} {...product} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProductGrid;
