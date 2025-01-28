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
            <Card
              source={'/assets/kampus-mengajar.png'}
              text={
                'Bantu tingkatkan kualitas pengajaran pendidikan dasar melalui'
              }
              boldText={' Kampus Mengajar'}
            />
            <Card
              source={'/assets/msib-logo@3x.79b8263c.webp'}
              text={
                'Rasakan pengalaman dunia kerja dengan terjun langsung melalui'
              }
              boldText={' Magang MSIB'}
            />
            <Card
              source={'/assets/msib-logo@3x.79b8263c.webp'}
              text={'Riset kolaboratif bersama perusahaan ternama melalui'}
              boldText=" Studi Independen"
            />
            <Card
              source={'/assets/mandiri-logo@3x.f47c79e6.webp'}
              text={
                'Temukan pengalaman dunia kerja yang dikelola secara langsung oleh perusahaan melalui'
              }
              boldText={' Magang Mandiri'}
            />
            <Card
              source={'/assets/pmm-logo@3x.6dc70f97.webp'}
              text={
                'Bertukar pengalaman budaya dengan universitas lain melalui'
              }
              boldText={' Pertukaran Mahasiswa'}
              restText={' dalam negeri'}
            />
            <Card
              source={'/assets/wmk-logo@3x.117eac29.webp'}
              text={
                'Ikuti program wirausaha dari perguruan tinggi lain melalui'
              }
              boldText={' Wirausaha Merdeka'}
            />
            <Card
              source={'/assets/iisma-logo-mobile@3x.b869caeb.webp'}
              text={'Perluas wawasan dan koneksi melalui '}
              boldText={' Pertukaran Mahasiswa secara Internasional'}
            />
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
