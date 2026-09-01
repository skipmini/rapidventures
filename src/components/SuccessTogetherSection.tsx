import { CtaButton } from "./CtaButton";

const imgTeamPhoto =
  "https://www.figma.com/api/mcp/asset/8c30fc97-0dfc-4d39-9b7a-c4e2c53f45d6.png";

export function SuccessTogetherSection() {
  return (
    <section className="w-full bg-surface-default px-20 py-[60px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col md:flex-row items-stretch gap-4">
        <div className="flex h-auto md:h-[343px] w-full md:w-[778px] flex-shrink-0 flex-col items-center justify-center gap-6 rounded-2xl border border-border-muted bg-surface-subtle p-10">
          <div className="flex flex-col items-center gap-2 text-center text-white">
            <h2 className="text-[40px] font-semibold leading-[56px] tracking-[-0.02em]">
              สำเร็จไปด้วยกัน
            </h2>
            <p className="max-w-[650px] text-lg leading-7">
              วิธีสร้างรายได้ของเรานั้นง่ายมาก เราเก็บค่า Retainer
              รายเดือนเพียงเล็กน้อยเพื่อให้มั่นใจว่าทั้งสองฝ่ายจะลุยไปด้วยกันอย่างเต็มที่โดยไม่เสียเวลา
              และเราขอรับส่วนแบ่งเล็กน้อยจากรายได้ส่วนที่เพิ่มขึ้นผ่านการเป็นพาร์ทเนอร์กันเท่านั้น
              ในขณะเดียวกันเราจะเข้าไปคลุกคลีกับธุรกิจของคุณและช่วยสร้างทุกสิ่งที่จำเป็นเพื่อสเกลธุรกิจของคุณให้เติบโตแบบก้าวกระโดด
            </p>
          </div>
        </div>

        <div className="relative flex h-[343px] flex-1 items-end justify-center overflow-hidden rounded-2xl bg-white">
          <img
            src={imgTeamPhoto}
            alt="ทีมงานกำลังประชุมและวางแผนธุรกิจ"
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-4 left-4 right-4 flex justify-start">
            <CtaButton className="max-w-[294px] w-full justify-between" />
          </div>
        </div>
      </div>
    </section>
  );
}
