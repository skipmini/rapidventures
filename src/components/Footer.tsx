import { Logo } from "./Logo";

const imgMail =
  "https://www.figma.com/api/mcp/asset/74d9740e-0368-4ddf-8395-dd86747e0fc6.svg";
const imgPhone =
  "https://www.figma.com/api/mcp/asset/b8b89b5a-a921-41d9-9dfd-cc8956c7fda0.svg";

const productLinks = ["RapidEnterprise", "RapidWorks"];

const socialIcons = [
  { label: "Instagram", glyph: "\uF0E1" },
  { label: "YouTube", glyph: "\uF23A" },
  { label: "Behance", glyph: "\uF39E" },
  { label: "LinkedIn", glyph: "\uF3C0" },
];

export function Footer() {
  return (
    <footer className="w-full bg-surface-subtle px-20 pt-[60px] pb-6">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-[112px]">
        <div className="flex flex-wrap items-start justify-between gap-12">
          <div className="flex flex-col gap-8">
            <Logo />
          </div>

          <div className="flex flex-wrap gap-24">
            <div className="flex w-32 flex-col gap-2">
              <p className="text-xs font-medium text-white">
                ผลิตภัณฑ์ของเรา
              </p>
              <div className="flex flex-col">
                {productLinks.map((label) => (
                  <p
                    key={label}
                    className="py-1 text-xl leading-7 text-white"
                  >
                    {label}
                  </p>
                ))}
              </div>
            </div>

            <div className="flex w-[213px] flex-col gap-2">
              <p className="text-xs font-medium text-white">ติดต่อเรา</p>
              <div className="flex flex-col">
                <div className="flex items-center gap-3 py-1">
                  <img src={imgMail} alt="" className="h-[10.5px] w-[14px]" />
                  <p className="text-xl leading-7 text-white">
                    kittipop.n@rpdwrks.com
                  </p>
                </div>
                <div className="flex items-center gap-3 py-1">
                  <img src={imgPhone} alt="" className="h-[14px] w-[14px]" />
                  <p className="text-xl leading-7 text-white">
                    084 259 3228
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {socialIcons.map(({ label, glyph }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex size-9 items-center justify-center rounded-full border border-white text-white"
              >
                <span aria-hidden className="text-lg">
                  {glyph}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="h-px w-full bg-white/10" />
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-[15px] font-semibold text-white">
              ©สงวนลิขสิทธิ์ 2569 บริษัท RapidVentures
            </p>
            <a
              href="#"
              className="text-[15px] font-semibold text-white hover:underline"
            >
              นโยบายความเป็นส่วนตัว
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
