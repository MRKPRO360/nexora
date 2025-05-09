'use client';

import { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from 'react-icons/md';

interface IAccordion {
  text: string;
  list: string[];
  id: string;
}

function Accordion({ text, list, id }: IAccordion) {
  const [open, setOpen] = useState(false);

  //   return (
  //     <div
  //       className="group transition duration-300" // Group parent for hover targeting
  //       onMouseEnter={() => setOpen(true)}
  //       onMouseLeave={() => setOpen(false)}
  //     >
  //       <label
  //         className="flex items-center justify-between w-full cursor-pointer"
  //         htmlFor={id}
  //       >
  //         <p> {text}</p>
  //         {open ? (
  //           <MdKeyboardArrowDown className="text-2xl" />
  //         ) : (
  //           <MdKeyboardArrowRight className="text-2xl" />
  //         )}
  //       </label>
  //       {open && (
  //         <ul className="hidden text-[16px] space-y-1 group-hover:block transition-all duration-300">
  //           {list.map((el, key) => (
  //             <li key={key}>{el}</li>
  //           ))}
  //         </ul>
  //       )}
  //     </div>
  //   );
  return (
    <div className="group hover:[&_ul]:block">
      <div className="flex items-center justify-between w-full cursor-pointer">
        <p>{text}</p>
        <MdKeyboardArrowRight className="text-2xl group-hover:hidden" />
        <MdKeyboardArrowDown className="text-2xl hidden group-hover:block" />
      </div>

      <ul className="hidden text-[16px] space-y-1 group-hover:block transition-all duration-300">
        {list.map((el, key) => (
          <li key={key}>{el}</li>
        ))}
      </ul>
    </div>
  );
}

export default Accordion;
