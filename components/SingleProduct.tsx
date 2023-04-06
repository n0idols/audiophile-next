"use client";
import { useState } from "react";
import { useCart } from "@/lib/Cart";
import { PlusIcon, MinusIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { Product } from "@/prisma/types";
import { toast } from "react-hot-toast";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function SingleProduct({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  function addItemToCart(e: React.SyntheticEvent) {
    e.preventDefault();
    addToCart(
      {
        id: product.id,
        name: product.name,
        shortname: product.shortname,
        price: product.price,
        mobileimg: product.mobileimg,
      },
      quantity
    );

    setQuantity(1);
    toast.success(`${product.name} added to cart`);
  }

  const icon = `h-4 w-4`;
  const no = false;

  return (
    <div className="my-8">
      <form className="flex flex-col" onSubmit={addItemToCart}>
        <div>
          <div className="grid md:grid-cols-2">
            <div className="col-span-1">
              {no ? (
                <Image
                  src={product?.image || "https://via.placeholder.com/360x360"}
                  alt={product.name}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto"
                />
              ) : (
                <Skeleton height={400} />
              )}
            </div>
            <div className="col-span-1 md:ml-20">
              <div className="flex flex-col justify-center h-full space-y-7 ">
                {/* is new product? */}
                <p className="uppercase text-primary wider mt-4">new product</p>
                <h2 className="text-4xl font-bold tracking-wide uppercase">
                  {product.name}
                </h2>
                <p className="text-gray-500">{product.desc}</p>
                <p className="font-bold wide">${product.price}</p>
                <div>
                  <div className="flex">
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
                      className="qty-input"
                    />

                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="qty-btn"
                    >
                      <PlusIcon className={icon} />
                    </button>
                    <button
                      className="ml-4 bg-primary px-10 text-white uppercase text-xs font-bold tracking-widest"
                      type="submit"
                    >
                      add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

      <div className="my-12">
        <div className="grid md:grid-cols-2">
          <div>
            <h2>Features</h2>
            <p>{product.features}</p>
          </div>
          <div>
            <h2>In The Box</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
