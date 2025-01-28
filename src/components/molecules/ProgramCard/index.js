import Image from 'next/image';
import Link from 'next/link';

export default function ProgramCard({
  source,
  title,
  text,
  target = '/program',
  find = '',
  sdk = false,
}) {
  return (
    <div className="flex justify-between h-[419px] lg:w-[356px] w-full flex-col rounded-2xl border shadow-lg bg-white p-6">
      <div className="">
        <div className="">
          <Image
            className="object-contain lg:h-20 lg:w-[306px] h-12 w-[118px]"
            width="306"
            height="80"
            src={source}
            alt={title}
          />
        </div>
        <div>
          <p className="text-[21px] font-bold py-2">{title}</p>
          <p className="text-sm leading-[20px] text-[#53575A]">{text}</p>
        </div>
      </div>
      <div>
        {find !== '' ? (
          <Link href={target}>
            <div className="flex justify-center items-center border border-black rounded-2xl h-11 hover:bg-gray-50">
              <p className="font-semibold">{find}</p>
            </div>
          </Link>
        ) : (
          <div className="mr-[25%] border-b border-gray-300"></div>
        )}

        <Link href={target}>
          <div className="flex justify-between items-center py-5 font-bold text-[#0B5FEF]">
            <span>Tentang Program</span>
            <svg className="fill-current" viewBox="0 0 24 24" height="24">
              <path d="M13,19c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l4.3-4.3H5c-0.6,0-1-0.4-1-1s0.4-1,1-1h11.6l-4.3-4.3  c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l6,6c0.1,0.1,0.2,0.2,0.2,0.3c0,0.1,0.1,0.2,0.1,0.4l0,0c0,0,0,0,0,0l0,0c0,0.1,0,0.3-0.1,0.4  c0,0.1-0.1,0.2-0.2,0.3l-6,6C13.5,18.9,13.3,19,13,19z"></path>
            </svg>
          </div>
        </Link>
        {sdk && (
          <>
            <div className="border-b border-gray-300"></div>
            <div className="flex justify-between py-5 font-bold text-[#0B5FEF]">
              <span>Syarat dan Ketentuan</span>
              <svg className="fill-current" viewBox="0 0 24 24" height="24">
                <path d="M13,19c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l4.3-4.3H5c-0.6,0-1-0.4-1-1s0.4-1,1-1h11.6l-4.3-4.3  c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l6,6c0.1,0.1,0.2,0.2,0.2,0.3c0,0.1,0.1,0.2,0.1,0.4l0,0c0,0,0,0,0,0l0,0c0,0.1,0,0.3-0.1,0.4  c0,0.1-0.1,0.2-0.2,0.3l-6,6C13.5,18.9,13.3,19,13,19z"></path>
              </svg>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
