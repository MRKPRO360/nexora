interface ICta {
  text: string;
}

function Cta({ text }: ICta) {
  return (
    <button className="py-3 px-6 md:py-4 md:px-12 bg-tertiary text-bgLight rounded-[4px] hover:bg-red-700/80 cursor-pointer transition duration-300 active:translate-y-1">
      {text}
    </button>
  );
}

export default Cta;
