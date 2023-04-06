export default async function getProduct(id: string) {
  const res = await fetch(
    `https://audiophile-next-beta.vercel.app/api/products/${id}`
    // `${process.env.NEXT_PUBLIC_API_ROUTE}/api/products/${id}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }
  return res.json();
}
