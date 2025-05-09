interface ISectionTittle {
  title: string;
}
function SectionTitle({ title }: ISectionTittle) {
  return (
    <div className="flex items-center gap-4 mb-5">
      <div className="w-5 h-10 rounded-[4px] bg-tertiary"></div>
      <span className="text-base font-semibold text-tertiary">{title}</span>
    </div>
  );
}

export default SectionTitle;
