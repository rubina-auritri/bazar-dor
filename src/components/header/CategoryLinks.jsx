
"use client";

import { usePathname } from "next/navigation";

export const CategoryLinks = ({ categories }) => {
  const pathname = usePathname();

  return (
    <>
      {categories.map((category) => {
        const href = `/category/${category.slug}`;
        const isActive = pathname === href;

        return (
          <a
            key={category.slug}
            href={href}
            className={`px-3 ${isActive ? "font-bold text-blue-500" : ""}`}
          >
            {category.nameBn}
          </a>
        );
      })}
    </>
  );
};

