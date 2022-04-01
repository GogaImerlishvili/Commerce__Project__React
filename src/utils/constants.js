import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text: "an important goal or purpose that is accompanied by strong conviction; a calling or vocation: She has finally found her mission in life",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "Compelling visions that move people to action, change their behaviors, focus on key priorities, and follow the pathway that the leader lays out.",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: "The modern manufacture of furniture, as distinct from its design, is a major mass-production industry in Europe, the U.S., and other advanced regions.",
  },
];

export const products_url = "https://course-api.com/react-store-products";

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
