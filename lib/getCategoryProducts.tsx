export default async function getCategoryProducts(id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_ROUTE}/api/categories/${id}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}
