import Link from 'next/link';
import Accordion from './Accordion';

function SideNav() {
  const sideNavItem = [
    {
      text: 'Electronics',
      path: '/electronics',
    },
    {
      text: 'Home & Lifestyle',
      path: '/lifeStyle',
    },
    {
      text: 'Medicine',
      path: '/medicine',
    },
    {
      text: 'Sports & Outdoor',
      path: '/sports',
    },
    {
      text: "Baby's & Toys",
      path: '/babyToy',
    },
    {
      text: 'Grocery & Pets',
      path: '/groceryPet',
    },
    {
      text: 'Healthy & Beauty',
      path: '/beauty',
    },
  ];

  return (
    <div className="pt-10 pr-5 border-r-2 border-r-secondary">
      <ul className="space-y-3 list-none">
        <Accordion
          text="Women's Fashion"
          list={['Shoes', 'Dress', 'Hair Cut']}
          id="women"
        />
        <Accordion
          text="Men's Fashion"
          list={['Sunglass', 'SmartWatch', 'TWS']}
          id="men"
        />

        {sideNavItem.map((el, key) => (
          <li className="text-[16px]" key={key}>
            <Link href={el.path}>{el.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideNav;
