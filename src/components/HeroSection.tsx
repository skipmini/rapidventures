import { CtaButton } from "./CtaButton";

const imgRightColumn =
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80";

export function HeroSection() {
  return (
    <section className="w-full bg-surface-default px-20 py-[60px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col md:flex-row gap-4 h-auto md:h-[560px]">
        <div className="flex w-full md:w-[559px] flex-col gap-4">
          <div className="flex flex-1 flex-col justify-between gap-6 rounded-xl bg-surface-light p-10">
            <h1 className="text-[40px] font-semibold leading-[56px] tracking-[-0.02em] text-black">
              ปลดล็อกทุกขีดจำกัดและสเกล
              <br />
              ธุรกิจ SME ของคุณด้วยทีม
              <br />
              คู่คิดด้านเทคโนโลยี
            </h1>
            <p className="max-w-[491px] text-xl leading-7 text-black whitespace-pre-line">
              ทีมงานของ Rapid Ventures ประกอบด้วยผู้เชี่ยวชาญที่มี
              ประสบการณ์ยาวนานนับสิบปี ในการช่วยผู้ประกอบการกว่า 125
              บริษัทปลดล็อกการเติบโตสเกลธุรกิจและนำพาไปสู่การ
              เข้าซื้อกิจการสำเร็จมากกว่า 6 บริษัท
            </p>
          </div>

          <CtaButton
            className="h-20 w-full justify-between"
            textClassName="text-2xl tracking-[-0.02em]"
          />
        </div>

        <div className="relative w-full md:flex-1 overflow-hidden rounded-xl">
          <img
            src={imgRightColumn}
            alt="ทีมงาน Rapid Ventures กำลังทำงานร่วมกัน"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
