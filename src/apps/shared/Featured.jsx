import Image from "next/image";
import bag3 from "@/assets/women/handbag-grey.webp";
import bag1 from "@/assets/women/woven-handbag-navy.webp";
import bag4 from "@/assets/women/suede-bag-olive.webp";
import bag2 from "@/assets/women/tote-stone.webp";
import belt from "@/assets/belt/belt-p.webp";
import sleeve from "@/assets/men/sleeve-tan.jpeg";
import handbag from "@/assets/men/handbag-tan.jpeg";
import duffel from "@/assets/men/duffel-tan.jpeg";

const featuredItems = [
  { id: 6, src: sleeve, alt: "Case" },

  { id: 1, src: bag3, alt: "Bag 3" },
  { id: 2, src: bag1, alt: "Bag 1" },
  { id: 8, src: duffel, alt: "Duffel Bag" },

  { id: 3, src: belt, alt: "Belt" },
    { id: 7, src: handbag, alt: "Hand Bag" },
  { id: 4, src: bag4, alt: "Bag 4" },
  { id: 5, src: bag2, alt: "Bag 2" },

];

export default function Featured() {
  return (
    <div className="sm:py-20 py-10">
      <h1 className="font-garamond text-3xl text-center mb-1 font-medium">
        Featured Products
      </h1>
      <p className="font-garamond text-center text-2xl mb-6 max-w-2xl mx-auto font-thin">
        Choose a style that makes you feel like you. Your voice, person, and a
        style only unique to you...
      </p>

      <section className="grid grid-cols-2 lg:grid-cols-4 place-items-center px-5 lg:px-20 gap-5 lg:gap-10 ">
        {featuredItems.map((item) => (
          <div key={item.id} className="flex flex-col items-start gap-1">
            <Image
              src={item.src}
              alt={item.alt}
              loading="eager"
              className="object-cover h-full w-full aspect-square hover:scale-105 duration-1500"
            />
            <p className="uppercase font-thin font-mono">{item.alt}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
