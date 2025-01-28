export default function Notes() {
  return (
    <div className="font-plus mt-6 lg;pl-0 pl-5">
      <p className="font-bold">Catatan Lain</p>
      <ol className="lg:w-[768px]">
        <li className="list-decimal pl-5">
          Perguruan Tinggi harus merupakan Perguruan Tinggi Negeri atau Swasta
          dan{' '}
          <span className="font-bold">
            berada di bawah Kementerian Pendidikan, Kebudayaan, Riset, dan
            Teknologi.
          </span>{' '}
          Cek panduannya{' '}
          <span className="underline text-blue-700 font-semibold">di sini</span>
          .
        </li>
        <li className="list-decimal lg:pl-2 pl-5">
          Mahasiswa hanya dapat mengikuti{' '}
          <span className="font-bold">1 (satu) program per periode</span>
        </li>
        <li className="list-decimal lg:pl-2 pl-5">
          Harus berstatus <span className="font-bold">mahasiswa aktif</span> .
          Jika mahasiswa lulus/mengikuti yudisium sebelum program berakhir maka
          dianggap mengundurkan diri dari program Kampus Merdeka.
        </li>
      </ol>
    </div>
  );
}
