import Counts from '@/components/molecules/BenefitMolecule/BenefitCount';
import Head from '@/components/molecules/BenefitMolecule/BenefitHead';
import Benefit from '@/components/molecules/BenefitMolecule/BenefitItem';
import Image from 'next/image';

export default function Benefits() {
  return (
    <section className="flex justify-center bg-[#25282b] min-h-screen lg:mt-20 mt-4 ">
      <div className="lg:w-[1160px] lg:py-20 pt-10">
        <div className="text-white">
          <Head />
          <Benefit /> 
          <Counts />
        </div>
      </div>
    </section>
  );
}
