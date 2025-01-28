import Image from 'next/image';

export default function Card() {
  return (
    <div className="flex flex-col justify-between w-[296px] h-[400px] rounded-2xl m-3 p-4 bg-white">
      <div className="flex flex-col">
        <div className="flex justify-center w-[224px] h-[58px] my-4">
          <Image
            className=""
            src="/assets/kampus-mengajar.png"
            alt=""
            width={300}
            height={300}
          />
        </div>
        <div className="">
          <p className="text-[18px] ">
            Bantu tingkatkan kualitas pengajaran pendidikan dasar melalui
            <span className="font-bold leading-5"> Kampus Mengajar</span>
          </p>
        </div>
      </div>
      <div>
        <div className="">
          <div className="flex justify-center gap-2 rounded-2xl border border-black p-2 mb-2">
            <span className="font-semibold">Selengkapnya</span>
            <svg viewBox="0 0 24 24" height={24} stroke="">
              <path d="M6,19c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4L15.6,7H7.9c-0.6,0-1-0.4-1-1s0.4-1,1-1H18c0,0,0,0,0,0l0,0  c0.1,0,0.3,0,0.4,0.1c0.1,0,0.2,0.1,0.3,0.2s0.2,0.2,0.2,0.3C19,5.7,19,5.9,19,6l0,0c0,0,0,0,0,0v10.1c0,0.6-0.4,1-1,1s-1-0.4-1-1  V8.4L6.7,18.7C6.5,18.9,6.3,19,6,19z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
