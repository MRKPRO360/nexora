import ProductDetails from '@/app/components/module/home/Products/ProductDetails';

async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;

  return <ProductDetails productId={productId} />;
}

export default ProductDetailsPage;
