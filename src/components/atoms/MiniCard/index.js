import Image from "next/image";

export default function MiniCard({source, text}) {
  return (
    <div className="flex flex-col items-center  gap-4 lg:p-7 p-5 lg:h-full h-44">
      <Image className="" src={source} alt="" width={76} height={76} />
      <p className="text-wrap text-center">{text}</p>
    </div>
  );
}
