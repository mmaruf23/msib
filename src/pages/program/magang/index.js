import Head from "next/head";

export default function MagangPage() {
  return (
    <>
    <Head>
        <title>Apa itu Magang? | Merdeka Belajar - Kampus Merdeka</title>
    </Head>
      <div className="flex justify-center bg-[url('/assets/images/magang.webp')] bg-no-repeat h-96 w-screen">
      <div className="lg:w-[1170px]">
        <section className="bg-[url('/assets/images/magang.webp')] bg-no-repeat object-cover h-96 w-screen">
          <p className="font-bold text-2xl">Ini Magang</p>
        </section>
      </div>
    </div>
    </>
  )
};
