import PageHero from "@/components/PageHero";
import getCategoryProducts from "@/lib/getCategoryProducts";
import { Category } from "@/prisma/types";

export default async function page() {
  const categoryData: Promise<Category> = getCategoryProducts("1");
  const cat = await Promise.all([categoryData]);
  const category = cat.flat();
  const products = category[0].Products;

  return (
    <>
      <PageHero title={category[0].name} />
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
