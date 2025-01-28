import Activity from '@/components/organism/Activity';
import Program from '@/components/organism/Programs';
import Head from 'next/head';

export default function ProgramPage() {
  return (
    <>
    <Head>
        <title>Program | Merdeka Belajar - Kampus Merdeka</title>
    </Head>
    <div className='flex justify-center mb-20'>
      <div className='lg:w-[1170px] py-5 lg:px-4'>
        <Program />
        <div className='w-full border-b py-5'></div>
        <Activity />
      </div>
    </div>
    </>
  );
}
