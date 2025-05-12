import SideNav from './SideNav';
import Carousel from './Carousel';

function HomeBanner() {
  return (
    <div className="flex">
      <div className="hidden lg:block md:w-[217px] ">
        <SideNav />
      </div>
      <div className="w-full lg:w-[85%]">
        <Carousel />
      </div>
    </div>
  );
}

export default HomeBanner;
