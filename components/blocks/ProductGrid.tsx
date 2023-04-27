/* eslint-disable */
import { Container } from '@components/modules/Container'
import PrintfulProduct from './PrintfulProduct'
import { breakpoints } from '@utils/settings'
import React from 'react'
import SanityProduct from './SanityProduct'

const ProductGrid = ({ products }: { products: any }) => {
  if (!products || products.length === 0) return null

  return (
    <section id="products" className="products">
      <Container maxWidth={breakpoints.xxl}>
        <h2 className="section-heading">Products</h2>
        <div className="product-grid">
          {products.map((product: any) => (
            <React.Fragment
              key={product.external_id ? product.id : product._id}
            >
              {product.external_id ? (
                <PrintfulProduct key={product.id} {...product} />
              ) : (
                <SanityProduct key={product._id} {...product} />
              )}
            </React.Fragment>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ProductGrid
