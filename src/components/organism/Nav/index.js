import Image from "next/image";
import Link from "next/link";

export default function Nav({isSingleNav = false}) {
  return (
    <>
      {/* // -- NAVBAR */}
      <nav className="flex justify-center bg-black">
        <div className="flex p-3 lg:p-4 w-[1170px] justify-between">
          <div className="flex gap-4 items-center">
            <div className="">
              <Image
                className="w-10"
                src={'/assets/logo-pendidikan.webp'}
                width={300}
                height={300}
                alt="Logo Pendidikan"
              />
            </div>
            <div className="">
              <Image
                className="w-[76px]"
                src="/assets/logo-white.webp"
                width={300}
                height={300}
                alt="Logo Kampus Merdeke"
              />
            </div>
          </div>
          <div className="text-white items-center gap-11 font-bold text-base font-sans hidden lg:flex">
            <div>
              <Link href={"/"}>
                <span>Beranda</span>
              </Link>
            </div>
            <div>
              <Link href={"/program"}>
                <span>Program</span>
              </Link>
            </div>
            <div>
              <Link href={"https://pusatinformasi.kampusmerdeka.kemdikbud.go.id/hc/en-us"}>
                <span>Butuh Bantuan?</span>
              </Link>
            
            </div>
            <div className="flex bg-white text-black items-center gap-2 p-3 rounded-3xl">
              <svg viewBox="0 0 24 24" height="20" fill="#A0A4A8" stroke="">
                <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"></path>
              </svg>
              <span className="font-plus">Masuk ke Akun</span>
            </div>
          </div>
          <div className="flex lg:hidden text-white items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16 M4 12h16 M4 18h16"
              />
            </svg>
          </div>
        </div>
      </nav>
      {/* // -- SEMI NAVBAR */}
      {!isSingleNav && 
      <nav className="hidden lg:flex justify-center">
        <div className="flex justify-start w-[1140px] gap-6">
          <div className="flex gap-5 text-wrap justify-center items-center font-semibold p-4 hover:bg-gray-100 hover:text-blue-600">
            <p className="w-20">Kampus Mengajar</p>
            <svg className="fill-current" viewBox="0 0 24 24" height={24}>
              <path d="M16.6,8.6L12,13.2L7.4,8.6L6,10l6,6l6-6L16.6,8.6z" />
            </svg>
          </div>
          <div className="flex gap-5 text-wrap justify-center items-center font-semibold p-4 hover:bg-gray-100 hover:text-blue-600">
            <p className="w-28">Magang MSIB</p>
            <svg className="fill-current" viewBox="0 0 24 24" height={24}>
              <path d="M16.6,8.6L12,13.2L7.4,8.6L6,10l6,6l6-6L16.6,8.6z" />
            </svg>
          </div>
          <div className="flex gap-5 text-wrap justify-center items-center font-semibold p-4 hover:bg-gray-100 hover:text-blue-600">
            <p className="w-36">Studi Independen Bersertifikat</p>
            <svg className="fill-current" viewBox="0 0 24 24" height={24}>
              <path d="M16.6,8.6L12,13.2L7.4,8.6L6,10l6,6l6-6L16.6,8.6z" />
            </svg>
          </div>
          <div className="flex gap-5 text-wrap justify-center items-center font-semibold p-4 hover:bg-gray-100 hover:text-blue-600">
            <p className="w-40">Pertukaran Mahasiswa Merdeka</p>
            <svg className="fill-current" viewBox="0 0 24 24" height={24}>
              <path d="M16.6,8.6L12,13.2L7.4,8.6L6,10l6,6l6-6L16.6,8.6z" />
            </svg>
          </div>
          <div className="flex gap-5 text-wrap justify-center items-center font-semibold p-4  hover:bg-gray-100 hover:text-blue-600">
            <p className="w-36">Program dan Kegiatan Lainnya</p>
          </div>
        </div>
      </nav>
      }
    </>
  );
};
