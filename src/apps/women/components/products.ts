import type { Product } from "@/components/ProductCard";

import handbagBlack from "@/assets/women/handbag-black.webp";
import handbagGreen from "@/assets/women/handbag-green.webp";
import handbagGrey from "@/assets/women/handbag-grey.webp";
import handbagTan from "@/assets/women/handbag-tan.webp";
import handbagNavy from "@/assets/women/handbag-navy.webp";

import structuredHandbagCaramel from "@/assets/women/structured-handbag-caramel.webp";
import structuredHandbagNavy from "@/assets/women/structured-handbag-navy.webp";
import structuredHandbagBlushTan from "@/assets/women/structured-handbag-blush-tan.webp";

import toteBlack from "@/assets/women/tote-black.webp";
import toteGreen from "@/assets/women/tote-green.webp";
import toteGrey from "@/assets/women/tote-grey.webp";
import toteStone from "@/assets/women/tote-stone.webp";
import toteNavy from "@/assets/women/tote-navy.webp";
import toteCognac from "@/assets/women/tote-cognac.webp";
import toteChestnut from "@/assets/women/tote-chestnut.webp";

import caseTan from "@/assets/women/case-tan.webp";
import caseGreen from "@/assets/women/case-green.webp";
import caseGrey from "@/assets/women/case-grey.webp";
import caseNavy from "@/assets/women/case-navy.webp";

import wovenHandbagGrey from "@/assets/women/woven-handbag-grey.webp";
import wovenHandbagTan from "@/assets/women/woven-handbag-tan.webp";
import wovenHandbagNavy from "@/assets/women/woven-handbag-navy.webp";

import suedeBagTan from "@/assets/women/suede-bag-tan.webp";
import suedeBagOlive from "@/assets/women/suede-bag-olive.webp";
import suedeBagNavy from "@/assets/women/suede-bag-navy.webp";

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
    ],
  },
  {
    slug: "structured-leather-handbag",
    name: "Structured Leather Handbag",
    price: 350000,
    colors: [
      { id: "caramel", name: "Caramel", hex: "#c2803a", image: structuredHandbagCaramel },
      { id: "navy", name: "Navy", hex: "#1f2f52", image: structuredHandbagNavy },
      { id: "blush-tan", name: "Blush tan", hex: "#b7735a", image: structuredHandbagBlushTan },
    ],
  },
  {
    slug: "leather-tote-bag",
    name: "Leather Tote Bag",
    price: 623000,
    colors: [
      { id: "black", name: "Black", hex: "#1c1c1c", image: toteBlack },
      { id: "green", name: "Green", hex: "#55632f", image: toteGreen },
      { id: "grey", name: "Grey", hex: "#7a7a78", image: toteGrey },
      { id: "stone", name: "Stone", hex: "#8f8a80", image: toteStone },
      { id: "navy", name: "Navy", hex: "#1f2f52", image: toteNavy },
      { id: "cognac", name: "Cognac", hex: "#a4541f", image: toteCognac },
      { id: "chestnut", name: "Chestnut", hex: "#6b3a22", image: toteChestnut },
    ],
  },
  {
    slug: "leather-case",
    name: "Leather Case",
    price: 234000,
    colors: [
      { id: "tan", name: "Tan", hex: "#b86a35", image: caseTan },
      { id: "green", name: "Green", hex: "#55632f", image: caseGreen },
      { id: "grey", name: "Grey", hex: "#7a7a78", image: caseGrey },
      { id: "navy", name: "Navy", hex: "#1f2f52", image: caseNavy },
    ],
  },
  {
    slug: "woven-leather-handbag",
    name: "Woven Leather Handbag",
    price: 157000,
    colors: [
      { id: "grey", name: "Grey", hex: "#7a7a78", image: wovenHandbagGrey },
      { id: "tan", name: "Tan", hex: "#b86a35", image: wovenHandbagTan },
      { id: "navy", name: "Navy", hex: "#1f2f52", image: wovenHandbagNavy },
    ],
  },
  {
    slug: "suede-bag",
    name: "Suede Bag",
    price: 450000,
    colors: [
      { id: "tan", name: "Tan", hex: "#d9a066", image: suedeBagTan },
      { id: "olive", name: "Olive", hex: "#6b6f3e", image: suedeBagOlive },
      { id: "navy", name: "Navy", hex: "#1f2f52", image: suedeBagNavy },
    ],
  },
];