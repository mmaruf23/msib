import MiniCard from '@/components/atoms/MiniCard';

export default function Benefit() {
  return (
    <div className="">
      <p className="lg:mt-20 lg:mb-20 mt-4 mb-2 text-center lg:text-5xl text-2xl font-bold ">
        Apa saja manfaat program Kampus Merdeka?
      </p>
      <div className=" grid lg:grid-cols-4 grid-cols-2 lg:text-base text-sm">
        <MiniCard
          source={'/assets/konversi.png'}
          text={'Kegiatan dapat dikonversi menjadi sks'}
        />
        <MiniCard
          source={'/assets/jaringan.png'}
          text={'Perluas jaringan hingga ke luar program studi dan universitas'}
        />
        <MiniCard
          source={'/assets/eksplorasi.png'}
          text={
            'Eksplorasi pengetahuan dan kemampuan di lapangan selama lebih dari satu semester'
          }
        />
        <MiniCard
          source={'/assets/mitra.png'}
          text={
            'Menimba ilmu secara langsung dari mitra berkualitas dan terkemuka'
          }
        />
      </div>
    </div>
  );
}
