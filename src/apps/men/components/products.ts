import type { Product } from "@/apps/shared/ProductCard";

import handbagBlack from "@/assets/men/handbag-black.webp";
import handbagGreen from "@/assets/men/handbag-green.webp";
import handbagGrey from "@/assets/men/handbag-grey.webp";
import handbagTan from "@/assets/men/handbag-tan.webp";
import handbagNavy from "@/assets/men/handbag-navy.webp";
import handbagStone from "@/assets/men/handbag-stone.webp";


import duffelTan from "@/assets/men/duffel-tan.webp";
import duffelBlack from "@/assets/men/duffel-black.webp";
import duffelGrey from "@/assets/men/duffel-grey.webp";
import duffelNavy from "@/assets/men/duffel-navy.webp";



export type CatalogProduct = Product & { slug: string };

export const products: CatalogProduct[] = [
  {
    slug: "leather-handbag",
    name: "Leather Handbag",
    price: 256000,
    colors: [
      { id: "black", name: "Black", hex: "#1c1c1c", image: handbagBlack },
      { id: "green", name: "Green", hex: "#55632f", image: handbagGreen },
      { id: "grey", name: "Grey", hex: "#7a7a78", image: handbagGrey },
      { id: "tan", name: "Tan", hex: "#b86a35", image: handbagTan },
      { id: "navy", name: "Navy", hex: "#1f2f52", image: handbagNavy },
      { id: "stone", name: "Stone", hex: "#ada587", image: handbagStone },
    ],
  },
  

  {
    slug: "leather-duffel",
    name: "Leather duffel",
    price: 234000,
    colors: [
      { id: "tan", name: "Tan", hex: "#b86a35", image: duffelTan },
      { id: "black", name: "Black", hex: "#000000", image: duffelBlack },
      { id: "grey", name: "Grey", hex: "#7a7a78", image: duffelGrey },
      { id: "navy", name: "Navy", hex: "#1f2f52", image: duffelNavy },
    ],
  },


];