import Link from 'next/link';

import {
  FiShoppingBag,
  FiSmartphone,
  FiHome,
  FiHeart,
  FiAward,
  FiShoppingCart,
  FiStar,
} from 'react-icons/fi';
import { FaBaby } from 'react-icons/fa';
import Dropdown from '@/app/components/utils/Dropdown';

export default function SideNav() {
  const sideNavItems = [
    {
      text: 'Electronics',
      path: '/electronics',
      icon: <FiSmartphone className="w-5 h-5" />,
    },
    {
      text: 'Home & Lifestyle',
      path: '/lifeStyle',
      icon: <FiHome className="w-5 h-5" />,
    },
    {
      text: 'Medicine',
      path: '/medicine',
      icon: <FiHeart className="w-5 h-5" />,
    },
    {
      text: 'Sports & Outdoor',
      path: '/sports',
      icon: <FiAward className="w-5 h-5" />,
    },
    {
      text: "Baby's & Toys",
      path: '/babyToy',
      icon: <FaBaby className="w-5 h-5" />,
    },
    {
      text: 'Grocery & Pets',
      path: '/groceryPet',
      icon: <FiShoppingCart className="w-5 h-5" />,
    },
    {
      text: 'Healthy & Beauty',
      path: '/beauty',
      icon: <FiStar className="w-5 h-5" />,
    },
  ];

  const fashionItems = [
    {
      label: 'Shoes',
      href: '/womens-fashion/shoes',
      icon: <FiShoppingBag className="w-4 h-4 mr-2" />,
    },
    {
      label: 'Dresses',
      href: '/womens-fashion/dresses',
      icon: <FiShoppingBag className="w-4 h-4 mr-2" />,
    },
    {
      label: 'Accessories',
      href: '/womens-fashion/accessories',
      icon: <FiShoppingBag className="w-4 h-4 mr-2" />,
    },
  ];

  return (
    <div className="w-64 p-4 border-r border-gray-200 bg-white">
      <nav className="space-y-1">
        <Dropdown
          title="Women's Fashion"
          items={fashionItems}
          icon={<FiShoppingBag className="w-5 h-5" />}
        />

        <Dropdown
          title="Men's Fashion"
          items={[
            {
              label: 'Shirts',
              href: '/mens-fashion/shirts',
              icon: <FiShoppingBag className="w-4 h-4 mr-2" />,
            },
            {
              label: 'Pants',
              href: '/mens-fashion/pants',
              icon: <FiShoppingBag className="w-4 h-4 mr-2" />,
            },
            {
              label: 'Watches',
              href: '/mens-fashion/watches',
              icon: <FiShoppingBag className="w-4 h-4 mr-2" />,
            },
          ]}
          icon={<FiShoppingBag className="w-5 h-5" />}
        />

        {sideNavItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
          >
            {item.icon}
            <span className="ml-2">{item.text}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
