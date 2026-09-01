import { Logo } from "./Logo";
import { CtaButton } from "./CtaButton";

const imgGlobe =
  "https://www.figma.com/api/mcp/asset/44b98a46-de2d-45f4-a55b-d399330d92e3.svg";
const imgChevron =
  "https://www.figma.com/api/mcp/asset/bafacbb1-2351-4df4-8cc4-409318d4334e.svg";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-surface-default">
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-20 py-4">
        <Logo />

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <img src={imgGlobe} alt="" className="size-[22px]" />
            <span className="text-[15px] font-semibold text-white">ไทย</span>
            <img src={imgChevron} alt="" className="h-[10px] w-[18px]" />
          </div>

          <CtaButton />
        </div>
      </div>
    </header>
  );
}
