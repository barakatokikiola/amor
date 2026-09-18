import Image from "next/image";
import chainbag from "@/assets/women/woven-handbag-tan.webp";
import bagc from "@/assets/bag-content.webp";

export default function WomenHero() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 relative">
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 bg-white/25 p-20">
        <h1 className="text-center text-4xl text-white font-medium">Women&#39;s</h1>
      </div>

      <Image
        src={bagc}
        alt="Bag Content"
        loading="eager"
        className="object-cover h-120 w-full hidden sm:block"
      />

      <Image
        src={chainbag}
        alt="Chain Bag"
        loading="eager"
        className="object-cover h-120 w-full"
      />
    </section>
  );
}
