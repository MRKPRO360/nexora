interface ICta {
  text: string;
  type?: 'button' | 'submit';
  size?: 'sm' | 'md' | 'lg';
}

function Cta({ text, type = 'button', size = 'lg' }: ICta) {
  return (
    <button
      type={type}
      className={`${
        size === 'md' && 'py-1'
      } py-3 px-6  md:px-12 bg-tertiary text-bgLight rounded-[4px] hover:bg-red-700/80 cursor-pointer transition duration-300 active:translate-y-1 border border-transparent`}
    >
      {text}
    </button>
  );
}

export default Cta;
