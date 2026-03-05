export type ProductCategory = "tshirt-short" | "tshirt-long" | "crewneck";

export type ProductSize = "XS" | "S" | "M" | "L" | "XL" | "2XL";

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  description: string;
  price: number;
  images: { src: string; alt: string }[];
  sizes: ProductSize[];
  colors: string[];
  tags: string[];
  inventory: number;
  fitNotes: string;
  materials: string;
}

export const products: Product[] = [
  {
    id: "ut-ss-hope-sky",
    name: "Hopeful Horizon Tee",
    slug: "hopeful-horizon-tee",
    category: "tshirt-short",
    description:
      "A softly structured short sleeve tee inspired by sunrise walks and calm mornings. Designed for sensory-friendly comfort with smooth seams and a tagless neckline.",
    price: 42,
    images: [
      {
        src: "https://placehold.co/800x1000/ffe8d9/2b1b10?text=Hopeful+Horizon+Tee",
        alt: "Soft short sleeve tee in a warm sunrise gradient, folded neatly on a linen surface."
      }
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    colors: ["Sunrise Peach", "Sky Mist"],
    tags: ["autism acceptance", "sensory-friendly", "daily wear"],
    inventory: 24,
    fitNotes: "Relaxed through the body with a gentle, non-clingy drape. True to size.",
    materials: "96% organic cotton, 4% elastane for a soft stretch."
  },
  {
    id: "ut-ss-spectrum-ocean",
    name: "Soft Spectrum Tee",
    slug: "soft-spectrum-tee",
    category: "tshirt-short",
    description:
      "A minimal front with an affirming back print: 'Different is not less.' Created in collaboration with autistic advocates.",
    price: 44,
    images: [
      {
        src: "https://placehold.co/800x1000/e0f2fe/0f172a?text=Soft+Spectrum+Tee",
        alt: "Light blue spectrum tee with a subtle back print, draped over a chair."
      }
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    colors: ["Ocean Mist"],
    tags: ["advocacy", "statement piece", "community"],
    inventory: 18,
    fitNotes: "Unisex cut with a slightly longer body for extra coverage.",
    materials: "100% combed ring-spun cotton."
  },
  {
    id: "ut-ss-listen-sand",
    name: "Listen First Tee",
    slug: "listen-first-tee",
    category: "tshirt-short",
    description:
      "A quiet reminder to center autistic voices, with a small chest embroidery that reads 'Listen first.'",
    price: 46,
    images: [
      {
        src: "https://placehold.co/800x1000/fef3c7/1f2933?text=Listen+First+Tee",
        alt: "Soft sand-colored tee with small 'Listen first' embroidery near the heart."
      }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Sandstone"],
    tags: ["embroidery", "subtle messaging", "autistic-led"],
    inventory: 20,
    fitNotes: "Gently curved hem with room through the shoulders.",
    materials: "70% organic cotton, 30% modal."
  },
  {
    id: "ut-ls-evening-ink",
    name: "Evening Calm Long Sleeve",
    slug: "evening-calm-long-sleeve",
    category: "tshirt-long",
    description:
      "A long sleeve layer for structured days and soft evenings, with thumb-friendly cuffs and a smooth interior finish.",
    price: 58,
    images: [
      {
        src: "https://placehold.co/800x1000/e5e7eb/020617?text=Evening+Calm+Long+Sleeve",
        alt: "Deep ink long sleeve tee folded with sleeves slightly tucked under."
      }
    ],
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: ["Ink Blue"],
    tags: ["layering", "sensory-friendly", "cool weather"],
    inventory: 15,
    fitNotes: "Straight fit with slightly tapered sleeves for gentle structure.",
    materials: "95% cotton, 5% elastane french terry."
  },
  {
    id: "ut-ls-night-forest",
    name: "Night Forest Long Sleeve",
    slug: "night-forest-long-sleeve",
    category: "tshirt-long",
    description:
      "A grounding long sleeve inspired by quiet forest walks, featuring a minimal sleeve detail honoring neurodiversity.",
    price: 60,
    images: [
      {
        src: "https://placehold.co/800x1000/d1fae5/064e3b?text=Night+Forest+Long+Sleeve",
        alt: "Deep green long sleeve shirt laid flat with subtle sleeve detail."
      }
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Forest Green"],
    tags: ["neurodiversity", "grounding", "sensory-friendly"],
    inventory: 12,
    fitNotes: "Skims the body without clinging; size up for a looser fit.",
    materials: "92% organic cotton, 8% recycled polyester."
  },
  {
    id: "ut-ls-cloud-ash",
    name: "Cloud Layer Long Sleeve",
    slug: "cloud-layer-long-sleeve",
    category: "tshirt-long",
    description:
      "Ultra-soft long sleeve with a brushed interior ideal for cooler, low-sensory days and cozy routines.",
    price: 62,
    images: [
      {
        src: "https://placehold.co/800x1000/f1f5f9/0f172a?text=Cloud+Layer+Long+Sleeve",
        alt: "Light grey long sleeve tee stacked on neutral textiles."
      }
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    colors: ["Cloud Grey"],
    tags: ["comfort", "home wear", "sensory-friendly"],
    inventory: 22,
    fitNotes: "Relaxed shoulder with a softly draped sleeve.",
    materials: "87% cotton, 13% recycled polyester."
  },
  {
    id: "ut-cn-embrace-stone",
    name: "Embrace Crew Sweater",
    slug: "embrace-crew-sweater",
    category: "crewneck",
    description:
      "A plush crew neck sweater with a subtle jacquard motif symbolizing interconnected support and community care.",
    price: 88,
    images: [
      {
        src: "https://placehold.co/800x1000/e2e8f0/020617?text=Embrace+Crew+Sweater",
        alt: "Stone-colored crew neck sweater folded in layers."
      }
    ],
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: ["Warm Stone"],
    tags: ["statement knit", "community", "cool weather"],
    inventory: 10,
    fitNotes: "Intentionally relaxed with extra ease through the torso.",
    materials: "60% organic cotton, 40% recycled polyester fleece."
  },
  {
    id: "ut-cn-radiant-rose",
    name: "Radiant Thread Crew",
    slug: "radiant-thread-crew",
    category: "crewneck",
    description:
      "A gentle blush crew celebrating the full spectrum of autistic experiences with a small back neck label: 'You belong exactly as you are.'",
    price: 92,
    images: [
      {
        src: "https://placehold.co/800x1000/ffe4e6/9f1239?text=Radiant+Thread+Crew",
        alt: "Soft blush crew neck sweater draped over a sofa."
      }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Blush"],
    tags: ["affirmation", "autism acceptance", "giftable"],
    inventory: 14,
    fitNotes: "Boxy through the body with a slightly cropped length.",
    materials: "80% organic cotton, 20% recycled polyester."
  },
  {
    id: "ut-cn-harbor-blue",
    name: "Harbor Rest Crew",
    slug: "harbor-rest-crew",
    category: "crewneck",
    description:
      "A deep blue crew built for recovery days and reset rituals, with softly ribbed cuffs that stay put without squeezing.",
    price: 90,
    images: [
      {
        src: "https://placehold.co/800x1000/dbebff/1d3557?text=Harbor+Rest+Crew",
        alt: "Deep blue crew neck sweater on a minimal hanger."
      }
    ],
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: ["Harbor Blue"],
    tags: ["rest", "sensory-friendly", "routine"],
    inventory: 16,
    fitNotes: "Classic length with a gently cinched waistband.",
    materials: "65% cotton, 35% recycled polyester."
  },
  {
    id: "ut-ss-play-sky",
    name: "Playful Echo Tee (Kids)",
    slug: "playful-echo-tee-kids",
    category: "tshirt-short",
    description:
      "A kids’ tee designed with caregivers and autistic children, featuring soft prints and room to move, jump, and stim freely.",
    price: 32,
    images: [
      {
        src: "https://placehold.co/800x1000/e0f2fe/0f172a?text=Playful+Echo+Tee+Kids",
        alt: "Children’s soft blue tee with playful line art, laid flat."
      }
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: ["Sky Blue"],
    tags: ["kids", "play", "caregiver-informed"],
    inventory: 25,
    fitNotes: "Relaxed kids’ fit with extra length for growth.",
    materials: "100% organic cotton."
  },
  {
    id: "ut-ss-family-wheat",
    name: "Together In This Tee",
    slug: "together-in-this-tee",
    category: "tshirt-short",
    description:
      "A family-forward tee honoring caregivers, siblings, and broader support networks with gentle typography at the hem.",
    price: 40,
    images: [
      {
        src: "https://placehold.co/800x1000/fefce8/1c1917?text=Together+In+This+Tee",
        alt: "Warm wheat-colored tee with tiny hem text 'Together in this'."
      }
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    colors: ["Wheat"],
    tags: ["family", "caregivers", "community"],
    inventory: 30,
    fitNotes: "Classic crew fit meant to coordinate across sizes.",
    materials: "100% cotton."
  },
  {
    id: "ut-cn-orbit-ink",
    name: "Orbit Crew Set",
    slug: "orbit-crew-set",
    category: "crewneck",
    description:
      "A coordinated crew ideal for team orders, clubs, and advocacy groups, ready to be customized for your community.",
    price: 96,
    images: [
      {
        src: "https://placehold.co/800x1000/e5e7eb/020617?text=Orbit+Crew+Set",
        alt: "Stack of matching navy crew neck sweaters with simple circular motif."
      }
    ],
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: ["Ink Navy"],
    tags: ["teams", "corporate", "bulk-friendly"],
    inventory: 40,
    fitNotes: "Standard crew fit that works across a wide range of bodies.",
    materials: "55% cotton, 45% recycled polyester."
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

