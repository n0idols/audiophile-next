import Hero from "@/components/Hero";
import Info from "@/components/Info";

import React from "react";
import CategoryList from "@/components/CategoryList";
import FeaturedProducts from "@/components/FeaturedProducts";

export default async function page() {
  return (
    <>
      <Hero />
      <CategoryList />
      <FeaturedProducts />
      <Info />
    </>
  );
}
