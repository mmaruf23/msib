import Table from "@/components/molecules/ConditionTable";
import Notes from "@/components/molecules/Notes";

export default function Conditions() {
  return (
    <section id="condition" className="flex lg:justify-center lg:mt-20 mt-5 bg-gray-100">
      <div className="lg:w-[1170px] w-screen">
        <div className="lg;my-4 lg;p-0 p-5">
          <p className="lg:text-[40px] text-[32px] font-bold">
            Apa saja syarat keikutsertaan mahasiswa?
          </p>
          <p className="lg:text-[18px]">
            Berikut adalah{' '}
            <span className="font-semibold">persyaratan umum</span> dari
            beberapa program Kampus Merdeka.
          </p>
        </div>
        <Table />
        <Notes />
        <div className="flex justify-center items-center mt-4 lg:mb-10 mb-5">
          <div className="bg-zinc-800 rounded-2xl lg:w-60 w-full m-6 p-2.5 text-white text-center">
            <span className="font-semibold">Lihat Program Lainnya</span>
          </div>
        </div>
      </div>
    </section>
  );
}
