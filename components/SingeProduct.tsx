"use client";
import { useCart } from "@/lib/Cart";

import React, { useState } from "react";

import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";
export default function SingleProduct({
  product: { id, name, desc, price },
}: any) {
  const { addToCart, cartOpen } = useCart();
  const [quantity, setQuantity] = useState(1);

  function addItemToCart(e: React.SyntheticEvent) {
    e.preventDefault();
    addToCart({ id: id, name: name, price: price }, quantity);
  }

  const icon = `h-4 w-4`;
  return (
    <form onSubmit={addItemToCart}>
      <div>
        <h1>{name}</h1>
        <p>{desc}</p>
        <p>{price}</p>
        <div className=" flex p-12">
          <button
            disabled={quantity < 2}
            type="button"
            onClick={() => setQuantity(quantity - 1)}
            className="qty-btn"
          >
            <MinusIcon className={icon} />
          </button>

          <input
            id="quantity"
            type="number"
            value={quantity}
            disabled
            className="w-[3rem]"
          />

          <button
            type="button"
            onClick={() => setQuantity(quantity + 1)}
            className="qty-btn"
          >
            <PlusIcon className={icon} />
          </button>
        </div>
        <button type="submit">add to cart</button>
      </div>
    </form>
  );
}
