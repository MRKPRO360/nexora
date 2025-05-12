import ProductDetails from '@/app/components/module/home/Products/ProductDetails';
import { getProductById } from '@/app/service/products';

async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  const result = await getProductById(productId);

  return <ProductDetails product={result} />;
}

export default ProductDetailsPage;
