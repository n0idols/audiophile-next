"use client";
import { useCart } from "@/lib/Cart";

export default function page() {
  const { cart } = useCart();
  return <pre>{JSON.stringify(cart, null, 2)}</pre>;
}
