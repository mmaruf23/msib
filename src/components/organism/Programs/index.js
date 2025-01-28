import ProgramCard from '@/components/molecules/ProgramCard';

export default function Program() {
  return (
    <>
      <div className="text-[40px] font-bold px-4 py-10">
        <p>Program Kampus Merdeka</p>
      </div>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-col-1 md:w-[780px] xl:w-full gap-y-5">
        <ProgramCard
          source={'/assets/kampus-mengajar.png'}
          title={'Kampus Mengajar'}
          text={
            'Bantu peningkatan kualitas pendidikan dasar dengan terlibat langsung  pada proses pengajaran di sekolah-sekolah yang berlokasi di seluruh daerah di Indonesia.'
          }
          sdk={true}
        />
        <ProgramCard
          source={'/assets/msib-logo@3x.79b8263c.webp'}
          title={'Magang MSIB'}
          text={
            'Dapatkan pengalaman dunia kerja secara langsung sebagai persiapan kariermu.'
          }
          find="Cari Posisi Magang"
          sdk={true}
        />
        <ProgramCard
          source={'/assets/msib-logo@3x.79b8263c.webp'}
          title={'Studi Independen'}
          text={
            'Jalankan proyek penelitian dengan studi kasus nyata dari para pelaku industri ternama.'
          }
          find="Cari Kelas Studi Independen"
          sdk={true}
        />
        <ProgramCard
          source={'/assets/pmm-logo@3x.6dc70f97.webp'}
          title={'Pertukaran Mahasiswa Merdeka'}
          text={
            'Program pertukaran mahasiswa dalam negeri  yang memberikan pengalaman langsung untuk lebih memaknai keberagaman budaya nusantara.'
          }
          sdk={true}
        />
        <ProgramCard
          source={'/assets/wmk-logo@3x.117eac29.webp'}
          title={'Wirausaha Merdeka'}
          text={
            'Ikuti program unggulan dari berbagai Perguruan Tinggi yang bertujuan untuk meningkatkan kemampuan wirausaha.'
          }
          sdk={false}
        />
        <ProgramCard
          source={'/assets/images/iisma.png'}
          title={'Indonesian International Student Mobility Awards'}
          text={
            'Program pertukaran dengan universitas lain dari seluruh dunia untuk bertukar budaya.'
          }
          sdk={true}
        />
        <ProgramCard
          source={'/assets/images/praktisi.png'}
          title={'Praktisi Mengajar'}
          text={
            'Ruang kolaborasi antara Praktisi sebagai representasi industri dengan dosen Perguruan Tinggi dalam bentuk pengajaran mata kuliah agar mahasiswa lebih siap untuk masuk ke dunia kerja.'
          }
          sdk={false}
        />
        <ProgramCard
          source={'/assets/images/bangkit.png'}
          title={'Bangkit by Google, GoTo, and Traveloka'}
          text={
            'Program kesiapan karier spesifik dengan 3 pilihan program, yaitu Machine Learning, Mobile Development, dan Cloud Computing.'
          }
          sdk={false}
        />
      </div>
    </>
  );
}
