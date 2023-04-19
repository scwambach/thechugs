/* eslint-disable */
import { useState } from "react";
import Image from "next/image";

import VariantPicker from "../modules/VariantPicker";
import React from "react";
import { BlurImage } from "../modules/BlurImage";

const SanityProduct = ({ _id: id, title, price, description, images }) => {
  // const { id, title, price, description } = product;

  console.log(images)

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
        {/* <VariantPicker
          value={activeVariantExternalId}
          onChange={(value: string) =>
            setActiveVariantExternalId(value)
          }
          variants={variants}
          disabled={oneStyle}
          /> */}
          <p className="price">{formattedPrice}</p>
      </div>
      <button
        className="snipcart-add-item button"
        data-item-id={id}
        data-item-price={price}
        data-item-url={`/api/products/${id}`}
        data-item-description={title}
        // data-item-image={activeVariantFile.preview_url}
        data-item-name={title}
      >
        Add to Cart
      </button>
    </article>
  );
};

export default SanityProduct;
