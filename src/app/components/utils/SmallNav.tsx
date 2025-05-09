import Dropdown from './Dropdown';

function SmallNav() {
  return (
    <div className="relative">
      <div className="items-center justify-center hidden gap-3 sm:flex bg-bgDark min-h-12 text-bgLight">
        <p className="text-sm font-light text-wrap">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
        <span className="text-sm font-semibold underline ">Shop Now</span>
        <Dropdown />
      </div>
    </div>
  );
}

export default SmallNav;
