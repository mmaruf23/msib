import Question from '@/components/molecules/QuestionMolecule';

export default function Questions() {
  return (
    <section className="flex justify-center bg-white overflow-hidden">
      <div className="w-[1170px]">
        <div className="lg:pt-36 pt-10">
          <p className="text-center lg:text-5xl text-[28px] font-semibold">
            Pertanyaan Umum
          </p>
        </div>
        <div className="lg:text-[18px] font-plus">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 lg:p-14 p-5">
            <Question
              text={
                'Bagaimana cara registrasi akun Merdeka Belajar Kampus Merdeka?'
              }
            />
            <Question text={'Bagaimana cara cek data saya di PDDikti?'} />
            <Question
              text={
                'Apa yang harus saya lakukan apabila data saya berbeda atau tidak ada di PDDikti?'
              }
            />
            <Question
              text={
                'Bagaimana cara verifikasi Nomor Induk Siswa Nasional (NISN)?'
              }
            />
            <Question
              text={
                'Bagaimana jika saya gagal verifikasi Nomor Induk Siswa Nasional (NISN)?'
              }
            />
            <Question
              text={
                'Apakah saya boleh mendaftar lebih dari 1 program Kampus Merdeka dalam periode yang sama?'
              }
            />
            <Question
              text={
                'Apa saja syarat verifikasi rekening bank dan bagaimana caranya?'
              }
            />
          </div>
          <div className="flex justify-center items-center mt-4 mb-10">
            <div className="rounded-2xl border border-black lg:w-60 w-full m-6 p-2.5 text-center">
              <span className="font-semibold">Lihat Pertanyaan Lainnya</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
