import { notFound } from "next/navigation";
import { getProductBySlug, products } from "@/lib/data/products";
import { ProductDetailClient } from "@/components/shop/product-detail-client";

interface ProductPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();
  return <ProductDetailClient product={product} />;
}


