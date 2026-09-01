const imgProfessionalsPhoto =
  "https://www.figma.com/api/mcp/asset/b7e64430-6346-4779-9451-588f9a28d556.png";

export function NotSoftwareHouseSection() {
  return (
    <section className="w-full bg-surface-default px-16 py-[60px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col md:flex-row gap-4">
        <div className="h-[320px] md:h-[520px] flex-1 overflow-hidden rounded-xl border border-border-subtle">
          <img
            src={imgProfessionalsPhoto}
            alt="ทีม RapidVentures เฉลิมฉลองความสำเร็จ"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex h-auto md:h-[520px] flex-1 flex-col justify-center gap-4 overflow-hidden rounded-xl border border-border-muted bg-surface-subtle p-12">
          <div className="flex flex-col gap-4 text-white">
            <h2 className="text-[40px] font-semibold leading-[56px] tracking-[-0.02em]">
              เราไม่ใช่ Software House
            </h2>
            <p className="text-lg leading-7">
              <span className="text-xl">
                การจ้าง Software House ให้ได้ผลลัพธ์ที่ตรงจุดมักมีต้นทุนที่สูงมาก
              </span>{" "}
              อีกทั้งผู้ประกอบการส่วนใหญ่ไม่ได้มีความเชี่ยวชาญในการ
              บริหารจัดการทีมนักพัฒนาและมักเจอปัญหาเป้าหมายไม่ตรงกันเนื่องจาก
              บริษัทรับจ้างภายนอกมุ่งเน้นเพียงการส่งมอบงานให้เสร็จเร็วที่สุดเพื่อ
              ทำกำไร มากกว่าความสำเร็จระยะยาวของธุรกิจ
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
