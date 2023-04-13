import { Layout } from '@components/wrappers/Layout'
import { HeroBanner } from '@components/blocks/HeroBanner'
import * as React from "react";
import { GetStaticProps } from "next";
import shuffle from "lodash.shuffle";

import { printful } from "../lib/printful-client";
import { formatVariantName } from "../lib/format-variant-name";
import { PrintfulProduct } from "../utils/storeTypes";

import ProductGrid from "../components/blocks/ProductGrid";

type IndexPageProps = {
  products: PrintfulProduct[];
};

export default function Store({ data }: { data: any }) {
  return (
    <Layout {...data.site}>
      <HeroBanner {...data.banner} />
      <>
        <div className="text-center pb-6 md:pb-12">
          <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">
            All Products
          </h1>
        </div>

        <ProductGrid products={products} />
      </>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { result: productIds } = await printful.get("sync/products");

  const allProducts = await Promise.all(
    productIds.map(async ({ id }) => await printful.get(`sync/products/${id}`))
  );

  const products: PrintfulProduct[] = allProducts.map(
    ({ result: { sync_product, sync_variants } }) => ({
      ...sync_product,
      variants: sync_variants.map(({ name, ...variant }) => ({
        name: formatVariantName(name),
        ...variant,
      })),
    })
  );

  return {
    props: {
      products: shuffle(products),
    },
  };
};
