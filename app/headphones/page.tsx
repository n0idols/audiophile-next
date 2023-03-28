import PageHero from "@/components/PageHero";

export default async function page() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_ROUTE}/api/headphones`
  );

  const data = await res.json();
  console.log(data);
  const products = data[0].Products;
  return (
    <>
      <PageHero title={data[0].name} />

      <section className="container">
        {products.map((product: any) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.desc}</p>
            <a href={`/headphones/${product.id}`}>view product</a>
          </div>
        ))}
      </section>
    </>
  );
}
