const imgUnion =
  "https://www.figma.com/api/mcp/asset/9f092dd7-fa2a-45ae-982e-ab5ec313ac16.svg";
const imgWordmark =
  "https://www.figma.com/api/mcp/asset/1d8bff19-c68a-48c4-b254-b1ae4342b5ad.svg";

/**
 * RapidVentures logomark. In Figma this is assembled from several separate
 * vector layers (a bolt icon + broken-up wordmark glyphs). That's a Figma
 * export artifact, not something worth reproducing 1:1 in code, so this
 * renders the same two logical pieces (icon + wordmark) with normal flexbox
 * flow instead of pixel-absolute positioning.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img src={imgUnion} alt="" className="h-[26px] w-auto" />
      <img src={imgWordmark} alt="RapidVentures" className="h-[16px] w-auto" />
    </div>
  );
}
