import Head from 'next/head';

export default function MengajarPage() {
  return (
    <>
      <Head>
        <title>Kampus Merdeka</title>
      </Head>
      <div className="flex justify-center bg-[url('/assets/headline-kampus-mengajar.webp')] bg-no-repeat bg-cover bg-center h-[506px]">
        <div className="lg:w-[1170px] lg:ml-4">
          <div className="text-white h-full flex items-center">
            <div className=''>
              <div className=''>
                <p className='text-[64px] font-bold'>Kampus Mengajar</p>
                <p className='font-plus text-sm'>Mengubah tantangan menjadi harapan</p>
              </div>
              <div className=''>
                <div className='bg-gray-300 text-gray-500 font-bold flex justify-between items-center w-[251px] mt-8 h-11 p-5 rounded-2xl'>
                  <span className=''>Daftar Sebagai Peserta</span>
                  <svg className="fill-current" viewBox="0 0 24 24" height="24" stroke=""><path d="M13,19c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l4.3-4.3H5c-0.6,0-1-0.4-1-1s0.4-1,1-1h11.6l-4.3-4.3  c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l6,6c0.1,0.1,0.2,0.2,0.2,0.3c0,0.1,0.1,0.2,0.1,0.4l0,0c0,0,0,0,0,0l0,0c0,0.1,0,0.3-0.1,0.4  c0,0.1-0.1,0.2-0.2,0.3l-6,6C13.5,18.9,13.3,19,13,19z"></path></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='lg:w-[1170px]'>
          <div className=''>
            <div className='mt-10 px-4'>
              <p className='text-5xl font-bold py-10'>Apa itu Kampus Mengajar?</p>
              <p className='text-[18px] leading-6 font-plus'>Kampus Mengajar merupakan kanal pembelajaran yang memberikan kesempatan kepada mahasiswa untuk belajar di luar kampus selama satu semester guna melatih kemampuan menyelesaikan permasalahan yang kompleks dengan menjadi mitra guru untuk berinovasi dalam pembelajaran, pengembangan strategi, dan model pembelajaran yang kreatif, inovatif, dan menyenangkan.</p>
            </div>
            <div className='mt-20 px-4'>
              <p className='text-5xl font-bold py-10'>Kenapa ikut Kampus Mengajar?</p>
              <div>
                <div className='grid lg:grid-cols-3 gap-y-10 font-plus text-[18px] leading-6'>
                  <div className='pr-12'>
                    <p className='font-semibold py-2'>01</p>
                    <p>Terlibat langsung sebagai mitra guru, kepala sekolah, dan tenaga kependidikan di sekolah sasaran dalam <span className="font-bold">menyusun dan melaksanakan strategi pembelajaran di sekolah</span> yang kreatif, inovatif, dan menyenangkan</p>
                  </div>
                  <div className='pr-12'>
                    <p className='font-semibold py-2'>02</p>
                    <p>Berkesempatan memiliki pengalaman dalam <span className='font-bold'>mengeksplorasi program yang beragam</span> sesuai dengan kebutuhan sekolah</p>
                  </div>
                  <div className='pr-12'>
                    <p className='font-semibold py-2'>03</p>
                    <p>Berkontribusi secara langsung sebagai <span className='font-bold'>agen perubahan</span> dalam pendidikan Indonesia</p>
                  </div>
                  <div className='pr-12'>
                    <p className='font-semibold py-2'>04</p>
                    <p>Mengasah jiwa kepemimpinan, pemecahan masalah, kemampuan komunikasi, berpikir analitis, kreativitas, dan inovasi <span className="font-bold">langsung dari lapangan</span></p>
                  </div>
                  <div className='pr-12'>
                    <p className='font-semibold py-2'>05</p>
                    <p>Menambah <span className="font-bold">jejaring pertemanan</span> dengan sesama mahasiswa di sekolah penempatan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='mt-32 lg:w-[840px] lg:ml-8 mb-28'>
              <p className='text-5xl font-bold py-10 lg:text-nowrap'>Apa Syarat Mendaftar di Program Ini?</p>
              <div>
                <div className='flex justify-between py-6 text-[18px] leading-6 font-plus border-b'>
                  <p>Sebagai Peserta (Mahasiswa)</p>
                  <svg className='mr-5' viewBox="0 0 24 24" height="24" fill="#0087C8" stroke=""><path d="M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6V13z"></path></svg>
                </div>
                <div className='flex justify-between py-6 text-[18px] leading-6 font-plus border-b'>
                  <p>Sebagai Dosen Pembimbing Lapangan</p>
                  <svg className='mr-5' viewBox="0 0 24 24" height="24" fill="#0087C8" stroke=""><path d="M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6V13z"></path></svg>
                </div>
                <div className='flex justify-between py-6 text-[18px] leading-6 font-plus border-b'>
                  <p>Sebagai Koordinator Perguruan Tinggi (PT)</p>
                  <svg className='mr-5' viewBox="0 0 24 24" height="24" fill="#0087C8" stroke=""><path d="M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6V13z"></path></svg>
                </div>
              </div>
              <div className='mt-10 bg-black text-white rounded-2xl w-[278px] h-11 flex justify-center items-center font-bold font-plus'>
                <p>Lihat Informasi Selengkapnya</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

MengajarPage.isSingleNav = true;
