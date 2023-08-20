/* eslint-disable */
// @ts-nocheck
import { Container } from '@components/modules/Container'
import Modal from '@components/modules/Modal'
import PrintfulProduct from './PrintfulProduct'
import { breakpoints } from '@utils/settings'
import React, { useEffect, useState } from 'react'
import SanityProduct from './SanityProduct'
import { useRouter } from 'next/router'

const ProductGrid = ({ products }: { products: any }) => {
  if (!products || products.length === 0) return null
  const router = useRouter()
  const [orderedProducts, setOrderedProducts] = useState([])
  const [queryProd, setQueryProd] = useState(null)

  useEffect(() => {
    const orderProds = products.sort((a: any, b: any) => {
      a = {
        ...a,
        name: a.name?.replace('The Chugs', '').toUpperCase(),
        title: a.title?.replace('The Chugs', '').toUpperCase()
      }
      b = {
        ...b,
        name: b.name?.replace('The Chugs', '').toUpperCase(),
        title: a.title?.replace('The Chugs', '').toUpperCase()
      }
      return (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0;
    })
    setOrderedProducts(orderProds);

    const { prodId } = router.query
    if (prodId !== undefined) {
      const idAsNum = parseInt(prodId);
      setQueryProd(orderProds.find((x:any) => x.id === idAsNum || x._id === prodId))
    }

  }, [])

  return (
    <section id="products" className="products">
      <Container maxWidth={breakpoints.xxl}>
        <div className="product-grid">
          {orderedProducts?.map((product: any) => (
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
      {queryProd && (
        <Modal firstOpen={true} onClose={() => setQueryProd(null)}>
          {queryProd.external_id ? (
            <PrintfulProduct key={queryProd.id} {...queryProd} />
          ) : (
            <SanityProduct key={queryProd._id} {...queryProd} />
          )}
        </Modal>
      )}
    </section>
  )
}

export default ProductGrid
