import Image from "next/image";
import bag3 from "@/assets/women/handbag-tan.webp";
import bag1 from "@/assets/men/image.webp";
import bag4 from "@/assets/men/handbag-tan.webp";

import duffel from "@/assets/men/duffel-tan.webp";

const featuredItems = [
  { id: 2, src: bag1, alt: "Bag 1" },

  { id: 8, src: duffel, alt: "Duffel Bag" },
  { id: 1, src: bag3, alt: "Bag 3" },
  { id: 4, src: bag4, alt: "Bag 4" },
];

export default function BestSellers() {
  return (
    <div className="sm:py-20 py-10">
      <h1 className="font-garamond text-3xl text-center mb-8 font-medium">
        Our Best Sellers
      </h1>
   

      <section className="grid grid-cols-2 lg:grid-cols-4 place-items-center px-5 lg:px-20 gap-5 lg:gap-10 ">
        {featuredItems.map((item) => (
          <div key={item.id} className="flex flex-col items-start gap-1">
            <Image
              src={item.src}
              alt={item.alt}
              loading="eager"
              className="object-cover h-full w-full aspect-square hover:scale-105 duration-1500"
            />
          </div>
        ))}
      </section>
    </div>
  );
}
