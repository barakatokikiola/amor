import Image from "next/image";
import chainbag from "@/assets/women/woven-handbag-tan.webp";
import pursebag from "@/assets/women/case-tan.webp";
import bagc from "@/assets/bag-content.webp";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-3">
      <Image
        src={bagc}
        alt="Bag Content"
        loading="eager"
        className="object-cover h-full w-full hidden sm:block"
      />
      <Image
        src={pursebag}
        alt="Purse Bag"
        loading="eager"
        className="object-cover h-full w-full"
      />

      <Image
        src={chainbag}
        alt="Chain Bag"
        loading="eager"
        className="object-cover h-full w-full hidden sm:block"
      />
    </section>
  );
}
