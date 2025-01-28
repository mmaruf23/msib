import Image from "next/image";

export default function Head() {
  return (
    <div className=" text-white flex flex-col-reverse lg:flex-row lg:gap-20">
      <div className="w-[565px] lg:h-[408px]">
        <div className="pl-3">
          <p className="text-[28px] leading-[40px] lg:text-5xl font-bold">
            Kampus Merdeka
          </p>
          <p className="text-[20px] leading-[28px] lg:my-7 my-2 font-semibold">
            Program persiapan karier yang komprehensif untuk mempersiapkan
            generasi terbaik Indonesia
          </p>
          <p className="text-[18px] leading-[28px] font-plus">
            Kampus Merdeka adalah bagian dari kebijakan Merdeka Belajar oleh
            Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi
            (Kemendikbudristek) yang memberikan seluruh mahasiswa
          </p>
          <p className="text-[#ffc000] font-semibold text-[18px] leading-[28px] font-plus">
            kesempatan untuk mengasah kemampuan sesuai bakat dan minat{' '}
            <span className="text-white">dengan</span> terjun langsung ke dunia
            kerja sebagai langkah persiapan karier.
          </p>
        </div>
      </div>
      <div>
        <div className="flex justify-center">
          <Image
            className="lg:w-full w-[598px] h-[347px] object-cover rounded-2xl"
            src="/assets/image.png"
            alt="Head"
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
}
