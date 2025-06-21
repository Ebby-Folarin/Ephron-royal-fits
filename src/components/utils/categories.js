const categories = [
  {
    id: "clothing",
    parentId: "clothing",
    name: "Clothing",
    sub: [
      {
        id: "hoodies",
        parentId: "clothing",
        image: "/images/hoodies.png",
        name: "hoodies",
        sub: [],
      },
      {
        id: "polos",
        parentId: "clothing",
        image: "/images/polo.png",
        name: "polos",
        sub: [],
      },
      {
        id: "tees",
        parentId: "clothing",
        image: "/images/tee.png",
        name: "tees",
        sub: [],
      },
      {
        id: "sweatshirts",
        parentId: "clothing",
        image: "/images/sweatshirts.png",
        name: "sweatshirts",
        sub: [],
      },
    ],
  },
  { id: "shoes", parentId: "shoes", name: "Shoes", sub: [] },
  {
    id: "accessories",
    parentId: "accessories",
    name: "Accessories",
    sub: [
      {
        id: "sunglasses",
        parentId: "accessories",
        image: "/images/glasses.png",
        name: "sunglasses",
        sub: [],
      },
      {
        id: "hairclips",
        parentId: "accessories",
        image: "/images/hairclips.png",
        name: "hair clips",
        sub: [],
      },
    ],
  },
  {
    id: "formals",
    parentId: "formals",
    name: "Formals",
    sub: [
      {
        id: "suits",
        parentId: "formals",
        image: "/images/fashion.png", // You may want to update this with a more appropriate image
        name: "suits",
        sub: [],
      },
      {
        id: "blazers",
        parentId: "formals",
        image: "/images/fashion.png", // You may want to update this with a more appropriate image
        name: "blazers",
        sub: [],
      },
      {
        id: "pants",
        parentId: "formals",
        image: "/images/fashion.png", // You may want to update this with a more appropriate image
        name: "pants",
        sub: [],
      },
    ],
  },
  {
    id: "beauty",
    parentId: "beauty",
    name: "Beauty",
    sub: [
      {
        id: "hair",
        parentId: "beauty",
        image: "/images/hairclips.png", // You may want to update this with a more appropriate image
        name: "hair",
        sub: [],
      },
      {
        id: "nails",
        parentId: "beauty",
        image: "/images/fashion.png", // You may want to update this with a more appropriate image
        name: "nails",
        sub: [],
      },
      {
        id: "makeup",
        parentId: "beauty",
        image: "/images/fashion.png", // You may want to update this with a more appropriate image
        name: "makeup",
        sub: [],
      },
      {
        id: "skincare",
        parentId: "beauty",
        image: "/images/fashion.png", // You may want to update this with a more appropriate image
        name: "skincare",
        sub: [],
      },
    ],
  },
  {
    id: "gems",
    parentId: "gems",
    name: "Gems",
    sub: [
      {
        id: "bracelets",
        parentId: "gems",
        image: "/images/bracelets.png",
        name: "bracelets",
        sub: [],
      },
      {
        id: "rings",
        parentId: "gems",
        image: "/images/rings.png",
        name: "rings",
        sub: [],
      },
      {
        id: "earrings",
        parentId: "gems",
        image: "/images/earrings.png",
        name: "earrings",
        sub: [],
      },
      {
        id: "necklaces",
        parentId: "gems",
        image: "/images/necklaces.png",
        name: "necklaces",
        sub: [],
      },
    ],
  },
  {
    id: "essentials",
    parentId: "essentials",
    name: "Essentials",
    sub: [
      {
        id: "journals",
        parentId: "essentials",
        image: "/images/journals.png",
        name: "journals",
        sub: [],
      },
      {
        id: "writingmaterials",
        parentId: "essentials",
        image: "/images/writingmaterials.png",
        name: "writing materials",
        sub: [],
      },
      {
        id: "bags",
        parentId: "essentials",
        image: "/images/bags.png",
        name: "bags",
        sub: [],
      },
    ],
  },
];

export default categories;
