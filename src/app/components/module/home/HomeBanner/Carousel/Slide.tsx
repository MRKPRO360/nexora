import apple from '@/assets/HomeBanner/apple.png';
import hero from '@/assets/HomeBanner/hero.png';
import Image from 'next/image';

import { BsArrowRight } from 'react-icons/bs';

function Slide() {
  const flexICenter = 'flex items-center';
  return (
    <div
      className={`${flexICenter} flex-col sm:flex-row text-primaryLight bg-bgDark justify-between`}
    >
      <div className="flex-col gap-5 pt-4 sm:pl-16 sm:pt-14">
        <div className={`${flexICenter} `}>
          <Image className="w-10" src={apple} alt="apple logo" />
          <small className="text-xs text-texLight">iPhone 14 Series</small>
        </div>
        <h1
          style={{
            lineHeight: 1.3,
          }}
          className="my-5 text-xl sm:text-2xl md:text-5xl font-semibold "
        >
          Up to 10% <br />
          off Voucher
        </h1>

        <button
          className={`text-[16px] font-medium underline underline-bg-white ${flexICenter} gap-2 pb-4 sm:pb-12 pt-1 cursor-pointer`}
        >
          <span>Shop Now</span>
          <BsArrowRight className="text-[24px]" />
        </button>
      </div>
      <div className="flex-1/2 sm:flex-1">
        <Image className="w-full h-full" src={hero} alt="iphone" />
      </div>
    </div>
  );
}

export default Slide;
