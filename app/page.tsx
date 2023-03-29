import Hero from "@/components/Hero";

import React from "react";
import CategoryList from "@/components/CategoryList";

export default async function page() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_ROUTE}/api/categories`
  );
  const data = await res.json();
  console.log(data);
  return (
    <>
      <Hero />

      <CategoryList categories={data} />
    </>
  );
}
