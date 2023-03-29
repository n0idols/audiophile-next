import Image from "next/image";
import { Category } from "@/prisma/types";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
export default function CategoryList({
  categories,
}: {
  categories: Category[];
}) {
  return (
    <div className="container">
      <div className="grid grid-cols-3 gap-8">
        {categories.map((category) => (
          <div key={category.id} className="">
            <div className="bg-gray-100 mt-32 flex flex-col justify-center items-center  ">
              <Image
                src={category.image}
                alt={category.name}
                width={250}
                height={250}
                className="-mt-20"
              />
              <div className="pb-6 space-y-3 text-center flex flex-col justify-center items-center">
                <h3 className="tracking-widest uppercase font-bold">
                  {category.name}
                </h3>

                <a
                  href={`/categories/${category.id}`}
                  className="text-xs text-gray-400 uppercase font-bold tracking-widest flex items-center"
                >
                  shop <ChevronRightIcon className="h-4 w-4" />{" "}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
