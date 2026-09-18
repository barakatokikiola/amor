import Image from "next/image";
import bag3 from "@/assets/women/handbag-grey.webp";
import bag1 from "@/assets/women/woven-handbag-navy.webp";
import bag4 from "@/assets/women/suede-bag-olive.webp";
import bag2 from "@/assets/women/tote-stone.webp";
import belt from "@/assets/belt/belt-p.webp";
import wallet from "@/assets/wallet/wallet.webp";
import chic from "@/assets/chic-bag.webp";
import shoe from "@/assets/men/Black_leather_handbag.jpeg";

const featuredItems = [
  { id: 1, src: bag3, alt: "Bag 3" },
  { id: 2, src: bag1, alt: "Bag 1" },
  { id: 3, src: bag2, alt: "Bag 2" },
  { id: 4, src: bag4, alt: "Bag 4" },
  { id: 5, src: belt, alt: "Belt" },
  { id: 6, src: wallet, alt: "Wallet" },
  { id: 7, src: chic, alt: "Chic Bag" },
  { id: 8, src: shoe, alt: "Shoe" },
];

export default function Featured() {
  return (
    <div className="sm:py-20 py-10">
      <h1 className="font-cormorant text-3xl text-center mb-8 font-medium">
        Featured Products
      </h1>

      <section className="grid grid-cols-2 lg:grid-cols-4 place-items-center px-5 lg:px-20 gap-5 lg:gap-10 ">
        {featuredItems.map((item) => (
          <div key={item.id} className="flex flex-col items-start gap-1">
            <Image
              src={item.src}
              alt={item.alt}
              loading="eager"
              className="object-cover h-full w-full aspect-square"
            />
            <p className="uppercase font-thin font-mono">{item.alt}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
