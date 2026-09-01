const imgArrow =
  "https://www.figma.com/api/mcp/asset/97f472dd-e22d-4461-af02-2ad8378857dd.svg";

export function CtaButton({
  children = "ร่วมเป็นพาร์ทเนอร์กับเรา",
  className = "",
  textClassName = "text-[15px]",
}: {
  children?: React.ReactNode;
  className?: string;
  textClassName?: string;
}) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center gap-[10px] rounded-lg bg-brand-yellow px-6 py-3 transition-opacity hover:opacity-90 ${className}`}
    >
      <span className={`font-semibold text-black ${textClassName}`}>
        {children}
      </span>
      <img src={imgArrow} alt="" className="h-[15px] w-[8px]" />
    </button>
  );
}
