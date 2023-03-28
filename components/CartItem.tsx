import React from "react";

export default function CartItem({ item }: any) {
  return <pre>{JSON.stringify(item, null, 2)}</pre>;
}
