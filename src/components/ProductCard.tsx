"use client";

import Image, { type StaticImageData } from "next/image";
import { useId, useState } from "react";

export type ColorVariant = {
  id: string;
  name: string;
  hex: string;
  image: StaticImageData;
};

export type Product = {
  name: string;
  price: number;
  bestSeller?: boolean;
  colors: ColorVariant[];
};

type Props = {
  product: Product;
  defaultColor?: string;
  priority?: boolean; // true for above-the-fold cards (improves LCP)
};

const ngn = new Intl.NumberFormat("en-NG", {
  style: "currency",
  currency: "NGN",
});

export default function ProductCard({ product, defaultColor, priority }: Props) {
  const groupId = useId();
  const initialId = defaultColor ?? product.colors[0].id;

  // selected: the swatch the user picked. shown: the image on screen.
  // They differ briefly while a newly picked image is still loading.
  const [view, setView] = useState({ selected: initialId, shown: initialId });

  // Variants mounted so far. The value is true once that image has loaded.
  // Only the default is mounted at first, so unpicked colors cost no requests.
  const [loaded, setLoaded] = useState<Record<string, boolean>>({
    [initialId]: true,
  });

  const select = (id: string) => {
    setLoaded((prev) => (id in prev ? prev : { ...prev, [id]: false }));
    setView((v) => ({ selected: id, shown: loaded[id] ? id : v.shown }));
  };

  const handleLoad = (id: string) => {
    setLoaded((prev) => ({ ...prev, [id]: true }));
    setView((v) => (v.selected === id ? { ...v, shown: id } : v));
  };

  return (
    <article className="mx-auto w-full text-center">
      <div className="relative isolate aspect-square w-full">
        {product.colors
          .filter((color) => color.id in loaded)
          .map((color) => {
            const isShown = color.id === view.shown;

            return (
              <Image
                key={color.id}
                src={color.image}
                alt={`${product.name} in ${color.name}`}
                aria-hidden={!isShown}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                priority={priority && color.id === initialId}
                onLoad={() => handleLoad(color.id)}
                className={`object-cover p-4 transition-opacity motion-reduce:transition-none ${
                  isShown
                    ? "z-10 opacity-100 duration-300"
                    : "z-0 opacity-0 duration-0 delay-300"
                }`}
              />
            );
          })}

        {product.bestSeller && (
          <span className="absolute right-0 top-0 z-20 grid size-16 place-items-center rounded-full bg-neutral-900 text-center text-[11px] leading-tight tracking-widest text-amber-500">
            BEST
            <br />
            SELLER
          </span>
        )}
      </div>

      <fieldset className="mt-8 flex justify-center gap-4">
        <legend className="sr-only">Colour</legend>

        {product.colors.map((color) => (
          <label key={color.id} className="cursor-pointer">
            <input
              type="radio"
              name={`${groupId}-color`}
              value={color.id}
              checked={color.id === view.selected}
              onChange={() => select(color.id)}
              className="peer sr-only"
            />
            <span
              style={{ backgroundColor: color.hex }}
              className="block size-3 rounded-full ring-offset-1 transition peer-checked:ring-1 peer-checked:ring-neutral-900 peer-focus-visible:ring-1 peer-focus-visible:ring-blue-600"
            />
            <span className="sr-only">{color.name}</span>
          </label>
        ))}
      </fieldset>

      <h3 className="mt-6 text-lg text-neutral-700">{product.name}</h3>
      <p className="mt-2 font-serif font-bold text-neutral-800">
        {ngn.format(product.price)}
      </p>
    </article>
  );
}