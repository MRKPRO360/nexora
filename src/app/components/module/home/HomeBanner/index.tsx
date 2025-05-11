import SideNav from './SideNav';
import Carousel from './Carousel';

function HomeBanner() {
  return (
    <div className="flex">
      <div className="hidden lg:block md:basis-56 ">
        <SideNav />
      </div>
      <div className="w-full lg:w-[75%]">
        <Carousel />
      </div>
    </div>
  );
}

export default HomeBanner;
