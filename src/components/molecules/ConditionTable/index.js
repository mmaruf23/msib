export default function Table() {
  return (
    <div
      className="w-full overflow-x-scroll lg:pl-0 pl-5"
      style={{ scrollbarWidth: 'none' }}
    >
      <div className="w-[1170px] rounded-2xl border lg:pl-0">
        <table className="font-plus w-full">
          <thead>
            <tr className="text-left">
              <th className="w-[173px] h-[128px]" />
              <th className="w-[193px]">
                <p>Magang dan Studi Independen Bersertifikat (MSIB)</p>
              </th>
              <th className="w-[193px]">
                <p>Kampus Mengajar</p>
              </th>
              <th className="w-[192px]">
                <p>Pertukaran Mahasiswa Merdeka</p>
              </th>
              <th className="w-[193px]">
                <p className="w-1/2">Wirausaha Merdeka</p>
              </th>
              <th className="w-[193px]">
                <p className="w-[161px]">
                  Indonesian International Student Mobility Awards
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-[#eff0f0] ">
              <td className="text-center font-bold h-[104px] p-4">
                <p className="text-wrap">Jenjang Pendidikan</p>
              </td>
              <td>
                <p>S1 atau Vokasi</p>
              </td>
              <td>
                <p>S1 atau Vokasi</p>
              </td>
              <td>
                <p>S1 atau Vokasi</p>
              </td>
              <td>
                <p>S1</p>
              </td>
              <td>
                <p>S1</p>
              </td>
            </tr>
            <tr>
              <td className="text-center font-bold h-44">
                <p>Semester</p>
              </td>
              <td className="pr-16">
                <ul>
                  <li className="list-disc">D2/D3/D4: Minimal semester 2</li>
                  <li className="list-disc">S1: Minimal semester 4</li>
                </ul>
              </td>
              <td>
                <p>Minimal semester 4</p>
              </td>
              <td>
                <p>Minimal semester 3</p>
              </td>
              <td className="pr-16 py-6">
                <ul>
                  <li className="list-disc">S1/D3/D4: Minimal semester 5</li>
                  <li className="list-disc">D2: Minimal semester 3</li>
                  <li className="list-disc">S2/S3: Tanpa batasan</li>
                </ul>
              </td>
              <td className="pr-6">
                <p>Semester 4 atau 6 saat proses pendaftaran</p>
              </td>
            </tr>
            <tr className="bg-[#eff0f0] ">
              <td className="text-center font-bold h-20">
                <p>Minimal IPK</p>
              </td>
              <td>-</td>
              <td>
                <p>3 dari skala 4</p>
              </td>
              <td>
                <p>2.8 dari skala 4</p>
              </td>
              <td>-</td>
              <td>
                <p>3 dari skala 4</p>
              </td>
            </tr>
            <tr className="">
              <td className="w-[96px] h-[100px]" />
              <td className="text-center h-20">
                <span className="border border-black rounded-2xl font-semibold py-2.5 px-6">
                  Selengkapnya
                </span>
              </td>
              <td className="text-center">
                <span className="border border-black rounded-2xl font-semibold py-2.5 px-6">
                  Selengkapnya
                </span>
              </td>
              <td className="text-center">
                <span className="border border-black rounded-2xl font-semibold py-2.5 px-6">
                  Selengkapnya
                </span>
              </td>
              <td className="text-center">
                <span className="border border-black rounded-2xl font-semibold py-2.5 px-6">
                  Selengkapnya
                </span>
              </td>
              <td className="text-center">
                <span className="border border-black rounded-2xl font-semibold py-2.5 px-6">
                  Selengkapnya
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
