import { Product } from "@/prisma/types";
import Image from "next/image";

export default function ProductItem({ product }: { product: Product }) {
  return (
    <div className="grid md:grid-cols-2 my-32" key={product.id}>
      <div className={product.id === "2" ? `order-last` : ``}>
        <Image
          src={product?.image || "/images/placeholder.png"}
          alt={product.name}
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto"
        />
      </div>
      <div className="flex flex-col justify-center px-6 space-y-6">
        <h2 className="text-4xl font-semibold uppercase">{product.name}</h2>
        <p className="pb-4 text-gray-600">{product.desc}</p>
        <div>
          <a href={`/headphones/${product.id}`} className="btn">
            view product
          </a>
        </div>
      </div>
    </div>
  );
}
