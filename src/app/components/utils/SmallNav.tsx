import Dropdown from './Dropdown';

function SmallNav() {
  return (
    <div className="relative bg-bgDark text-softLight">
      <div className="max-w-[1545px] mx-auto items-center justify-center hidden gap-3 sm:flex min-h-12 text-bgLight">
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
