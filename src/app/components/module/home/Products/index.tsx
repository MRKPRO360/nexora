import ProductCard from './ProductCard';
import lays from '@/assets/Products/lays.png';
import canon from '@/assets/Products/camera.png';
import laptop from '@/assets/Products/laptop.png';
import cream from '@/assets/Products/cream.png';
import jacket from '@/assets/Products/jacket.png';
import gamepad from '@/assets/Products/gaming.png';
import boot from '@/assets/Products/boot.png';
import car from '@/assets/Products/car.png';
import { IItem } from '@/types';
import SectionTitle from '@/app/components/utils/SectionTitle';
import Cta from '@/app/components/utils/Cta';

const items: IItem[] = [
  {
    id: 1,
    title: 'Breed Dry Dog Food',
    price: '100',
    ratings: '3',
    ratingQuantity: 35,
    img: lays,
  },
  {
    id: 2,
    title: 'CANON EOS DSLR Camera',
    price: '360',
    ratings: '4',
    ratingQuantity: 95,
    img: canon,
  },
  {
    id: 3,
    title: 'ASUS FHD Gaming Laptop',
    price: '700',
    ratings: '5',
    ratingQuantity: 325,
    img: laptop,
  },
  {
    id: 4,
    title: 'Curology Product Set',
    price: '500',
    ratings: '4',
    ratingQuantity: 145,
    img: cream,
  },
  {
    id: 5,
    title: 'Kids Electric Car',
    price: '960',
    ratings: '5',
    ratingQuantity: 65,
    condition: 'new',
    img: car,
    variant: ['red', 'black'],
  },
  {
    id: 6,
    title: 'Jr. Zoom Soccer Cleats',
    price: '116',
    ratings: '5',
    ratingQuantity: 35,
    img: boot,
    variant: ['red', 'yellow'],
  },
  {
    id: 7,
    title: 'GP11 Shooter USB Gamepad',
    price: '660',
    ratings: '4',
    ratingQuantity: 35,
    img: gamepad,
    condition: 'new',
    variant: ['black', 'red'],
  },
  {
    id: 8,
    title: 'Quilted Satin Jacket',
    price: '660',
    ratings: '4',
    ratingQuantity: 55,
    img: jacket,
    variant: ['black', 'red'],
  },
];

function Products() {
  return (
    <div className="mb-[67px] mt-[60px]">
      <div className="text-center flex flex-col items-center justify-center  gap-5">
        <SectionTitle title={"Our Prouct's"} />
        <h1 className="text-4xl font-semibold">Explore Our Products</h1>
      </div>
      <div className="mt-[60px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[30px] gap-y-15">
        {items.map((product: IItem, key: number) => (
          <ProductCard key={key} product={product} />
        ))}
      </div>

      <div className="text-center mt-[60px]">
        <Cta text="View All Products" />
      </div>
    </div>
  );
}

export default Products;
