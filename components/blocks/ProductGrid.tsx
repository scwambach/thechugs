/* eslint-disable */
import { Container } from '@components/modules/Container'
import PrintfulProduct from './PrintfulProduct'
import { breakpoints } from '@utils/settings'
import React from 'react'
import SanityProduct from './SanityProduct'

const ProductGrid = ({ products }: { products: any }) => {
  if (!products || products.length === 0) return null

  const orderedProducts = products.sort((a: any, b: any) => {
    a = {
      ...a,
      name: a.name.replace('The Chugs', '').toUpperCase()
    }
    b = {
      ...b,
      name: b.name.replace('The Chugs', '').toUpperCase()
    }
    return (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0;
  });

  return (
    <section id="products" className="products">
      <Container maxWidth={breakpoints.xxl}>
        <div className="product-grid">
          {orderedProducts.map((product: any) => (
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
