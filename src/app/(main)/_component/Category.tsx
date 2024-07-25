"use client";

import Image from "next/image";
import Link from "next/link";

interface CategoryItem {
  title: string;
  imgUrl: string;
  href: string;
}

interface CategoryProps {
  categories: CategoryItem[];
}

const Category = ({ categories }: CategoryProps) => {
  return (
    <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
      {categories.map((item, index) => (
        <div key={index} className="flex flex-col hover:underline">
          <div className="aspect-square rounded-lg overflow-hidden flex-grow">
            <Image
              src={item.imgUrl}
              alt="category item"
              width={300}
              height={300}
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
            />
          </div>

          <Link
            href={item.href}
            className="mt-4 mb-2 text-center text-base md:text-xl"
          >
            {item.title}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Category;
