import Card from '@/components/molecules/Card';

export default function Cards() {
  return (
      <section className="flex justify-center bg-gray-100">
        <div className="lg:w-[1170px] lg:mt-10">
          <div className="px-6 lg:px-0 py-5">
            <span className="lg:text-[40px] text-[28px]  leading-[56px] font-bold">
              Program dan Kegiatan Unggulan
            </span>
          </div>
          <div
            className="lg:w-[1170px] w-screen overflow-scroll font-plus"
            style={{ scrollbarWidth: 'none' }}
          >
            <div className="mx-4 lg:mx-0 flex">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />

            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="bg-zinc-800 rounded-2xl lg:w-60 w-full m-6 p-2.5 text-white text-center">
              <span className="font-semibold">Lihat Program Lainnya</span>
            </div>
          </div>
        </div>
      </section>
  );
}
