export default async function page() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/api/earphones`);
  const products = await res.json();
  return (
    <div>
      <h1>Earphones</h1>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
