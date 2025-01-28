import Link from 'next/link';

export default function Hero() {
  return (
    <section className="flex justify-center bg-[url(/assets/headline-mahasiswa.webp)] bg-no-repeat bg-cover bg-center w-full">
      <div className="flex justify-start items-center w-[1170px] lg:h-[556px] h-[315px]">
        <div className="text-wrap text-white lg:mx-0 mx-5 lg:pt-0 pt-12 pb-10">
          <div className="w-56 h-20 lg:w-1/2 lg:h-full">
            <p className="lg:text-7xl text-[28px] leading-10 font-bold">
              Ambil Kendali Masa Depanmu
            </p>
          </div>
          <div className="lg:w-1/2">
            <p className="text-[16px] lg:text-xl leading-6 font-plus">
              Kampus Merdeka adalah cara terbaik berkuliah. Dapatkan kemerdekaan
              untuk membentuk masa depan yang sesuai dengan aspirasi kariermu.
            </p>
          </div>
          <div className="flex mt-5 gap-3 flex-col lg:flex-row text-sm">
            <Link href={'/program'}>
              <div className="bg-blue-600 rounded-2xl lg:w-56 lg:py-3 py-2.5 text-center">
                <span className="font-semibold lg:text-[16px]">
                  Telusuri Program
                </span>
              </div>
            </Link>
            <Link href={'#condition'}>
              <div className="bg-white rounded-2xl lg:py-3 py-2.5 lg:w-56 text-center">
                <span className="font-semibold text-black lg:text-[16px]">
                  Cek Persyaratan Umum
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
