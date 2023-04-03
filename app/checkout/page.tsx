"use client";
import CartItem from "@/components/CartItem";
import { useCart } from "@/lib/Cart";
import { Key } from "react";

export default function Page() {
  const { cart } = useCart();
  return (
    <div className="bg-gray-200 h-screen">
      <section className="container pt-10">
        <div className=" px-6 grid lg:grid-cols-3 ">
          <div className="col-span-2 bg-white lg:px-8 px-8 rounded-lg">
            <h2 className="py-6 uppercase tracking-widest font-bold text-2xl">
              Checkout
            </h2>
            <form action="">
              <fieldset>
                <legend>Billing details</legend>
                <div className="form-row">
                  <div className="input-row">
                    <label htmlFor="name">name</label>
                    <input
                      type="text"
                      name=""
                      placeholder="Alexei Ward"
                      className="form w-full"
                    />
                  </div>
                  <div className="input-row">
                    <label htmlFor="email">email address</label>
                    <input
                      type="email"
                      placeholder="alexei@mail.com"
                      className="form w-full"
                    />
                  </div>
                </div>

                <label htmlFor="phone">phone number</label>
                <div className="md:pr-4">
                  <input
                    type="text"
                    placeholder="+1 202-555-0136"
                    className="form md:w-1/2 w-full"
                  />
                </div>
              </fieldset>

              <fieldset>
                <legend>shipping info</legend>
                <label htmlFor="address">address</label>

                <input
                  type="text"
                  placeholder="1137 Williams Avenue"
                  className="form w-full"
                />

                <div className="form-row">
                  <div className="input-row">
                    <label htmlFor="zip">zip</label>
                    <input
                      type="text"
                      placeholder="10001"
                      className="form w-full"
                    />
                  </div>
                  <div className="input-row">
                    <label htmlFor="city">city</label>
                    <input
                      type="text"
                      placeholder="new york"
                      className="form w-full"
                    />
                  </div>
                </div>
                <label htmlFor="city">country</label>
                <div className="md:pr-4">
                  <input
                    type="text"
                    placeholder="United States"
                    className="form md:w-1/2 w-full"
                  />
                </div>
              </fieldset>

              <fieldset>
                <legend>payment details</legend>

                <label htmlFor="">currenct</label>
                <input type="radio" name="e-money" className="" />
                <input type="radio" name="" />
              </fieldset>
            </form>
          </div>

          <div className="bg-white ml-6 p-4 rounded-lg">
            <h4 className="uppercase tracking-widest font-bold">summary</h4>
            {cart.map((cartItem: any, index: Key | null | undefined) => {
              return (
                <div key={index}>
                  <CartItem item={cartItem} isCheckout />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
