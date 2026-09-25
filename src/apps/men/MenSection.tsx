import ProductCard from "@/apps/shared/ProductCard";
import { products } from "./components/products";
import PagesHero from "../shared/PagesHero";

export default function MenSection() {
  return (
    <div className="flex flex-col">
      <PagesHero page="men"/>

      <section className="grid grid-cols-2 gap-x-6 gap-y-12 px-4 lg:px-20 py-10 lg:grid-cols-4">
        {products.map((product, i) => (
          <ProductCard key={product.slug} product={product} priority={i < 4} />
        ))}
      </section>
    </div>
  );
}
