import Hero from "../apps/shared/Hero";
import Featured from "../apps/shared/Featured";
import BestSellers from "@/apps/shared/BestSellers";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />

      <Featured />
      <BestSellers />
    </div>
  );
}
