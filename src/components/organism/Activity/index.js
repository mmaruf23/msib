import ActivityCard from "@/components/molecules/ActivityCard";

export default function Activity() {
  return (
    <>
      <div className="text-[40px] font-bold py-5">
        <p>Kegiatan Lainnya</p>
      </div>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-col-1 md:w-[780px] xl:w-full gap-y-5">
        <ActivityCard
          source={'/assets/mandiri-logo@3x.f47c79e6.webp'}
          title={'Magang Mandiri'}
          text={
            'Temukan pengalaman dunia kerja yang dikelola langsung oleh perusahaan tanpa ada batasan kuota dan jadwal yang lebih fleksibel.'
          }
          find="Cari Posisi Magang"
          sdk={false}
        />
      </div>
    </>
  );
};
