/* eslint-disable */
import { useState } from "react";
import Image from "next/image";

import VariantPicker from "../modules/VariantPicker";
import React from "react";
import { BlurImage } from "../modules/BlurImage";

const SanityProduct = ({ _id, title, price, images }: { _id: any, title: any, price: any, images: any }) => {

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: 'currency',
    currency: 'USD',
  }).format(price);

  return (
    <article className="product-item">
      <div className="product-img">
        <BlurImage {...images[0]} />
      </div>
      <h4>{title}</h4>
      <div className="product-info">
          <p className="price">{formattedPrice}</p>
      </div>
      <button
        className="snipcart-add-item button"
        data-item-id={_id}
        data-item-price={price}
        data-item-url={`/api/products/${_id}`}
        data-item-description={title}
        data-item-image={images[0].url}
        data-item-name={title}
        data-item-custom1-type="hidden"
        data-item-custom1-name="PrintfulProduct"
        data-item-custom1-value="false"
      >
        Add to Cart
      </button>
    </article>
  );
};

export default SanityProduct;
