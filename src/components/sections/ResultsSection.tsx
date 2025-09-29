import React from 'react';
import Link from 'next/link';
import { caseStudiesData } from '@/data/caseStudiesData';
import SectionTitle from '@/components/ui/SectionTitle';
import Image from 'next/image';
interface ResultsSectionProps {
  onOpenCaseStudyModal?: () => void;
}

export default function ResultsSection({ onOpenCaseStudyModal }: ResultsSectionProps) {
  return (
    <section id="results" className="relative box-border py-20">
      {/* Repeating B pattern background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="flex justify-between items-end h-full opacity-5">
          <Image src="/B-outline.svg" alt="" className="h-full w-auto max-h-[400px] object-contain" width={400} height={400} />
          <Image src="/B-outline.svg" alt="" className="h-full w-auto max-h-[400px] object-contain" width={400} height={400} />
          <Image src="/B-outline.svg" alt="" className="h-full w-auto max-h-[400px] object-contain" width={400} height={400} />
          <Image src="/B-outline.svg" alt="" className="h-full w-auto max-h-[400px] object-contain" width={400} height={400} />
          <Image src="/B-outline.svg" alt="" className="h-full w-auto max-h-[400px] object-contain" width={400} height={400} />
          <Image src="/B-outline.svg" alt="" className="h-full w-auto max-h-[400px] object-contain" width={400} height={400} />
        </div>
      </div>
      <div className="relative z-10">
      <div className="box-border w-full px-5 md:px-10">
        <div className="box-border max-w-[1312px] w-full mx-auto">
          <div className="box-border">
            <SectionTitle 
              title="REZULTATE OBȚINUTE" 
              subtitle="PENTRU PARTENERII NOȘTRI" 
            />
            <div className="box-border gap-x-8 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-8 mt-16 md:grid-cols-[1fr_1fr_1fr]">
              {caseStudiesData.cases.map((caseStudy) => (
                <Link key={caseStudy.id} href={caseStudy.href} className="relative box-border flex flex-col h-[332px] justify-between max-w-full overflow-hidden rounded-[20px] md:h-[596px] group cursor-pointer transition-transform duration-300 hover:scale-[1.02]">
                  <div className="relative box-border z-[2]">
                    <div className="items-center box-border flex justify-between p-6 md:p-8">
                      <Image alt="" src={caseStudy.logo} className={caseStudy.logoClass} width={400} height={400} />
                    </div>
                  </div>
                  <div className="relative box-border z-[2]">
                    <div className="items-center box-border gap-x-5 grid auto-cols-[1fr] grid-cols-[1fr_1fr_1fr] grid-rows-[auto] justify-between gap-y-5 p-3 md:p-8">
                      {caseStudy.metrics.map((metric, index) => (
                        <div key={index} className="text-white items-center box-border gap-x-1 flex flex-col justify-center gap-y-1 text-center md:gap-x-2 md:gap-y-2">
                          <h3 className="text-xl font-bold box-border leading-6 uppercase md:text-[28px] md:leading-[33.6px]">
                            {'hasStrong' in metric && metric.hasStrong ? (
                              <strong className="text-xl box-border leading-6 md:text-[28px] md:leading-[33.6px]">{metric.value}</strong>
                            ) : (
                              metric.value
                            )}
                            {'hasBreak' in metric && metric.hasBreak && <br className="text-xl box-border leading-6 md:text-[28px] md:leading-[33.6px]" />}
                          </h3>
                          <div className="box-border font-poppins">
                            <div className="text-[11.2px] box-border leading-[15.68px] capitalize md:text-sm md:leading-[19.6px]">
                              {metric.label}
                              {'labelBreak' in metric && metric.labelBreak && <br className="text-[11.2px] box-border leading-[15.68px] md:text-sm md:leading-[19.6px]" />}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Image src={caseStudy.backgroundImage} alt="" sizes="100vw" className={`${caseStudy.backgroundClass} transition-transform duration-500 group-hover:scale-110`} width={400} height={400} />
                  <div className="absolute bg-[linear-gradient(rgba(0,0,0,0.6)_0%,rgba(0,0,0,0.12)_25%,rgba(0,0,0,0)_30%,rgba(0,0,0,0)_70%,rgba(0,0,0,0.12)_75%,rgba(0,0,0,0.6)_100%)] box-border z-[1] inset-[0%]"></div>
                </Link>
              ))}
            </div>
            <div className="items-center box-border flex justify-center mt-12 md:mt-20">
              <Link href="/work" className="text-white text-base font-bold bg-gray-900 box-border block leading-6 text-center border border-gray-900 px-5 py-2 rounded-[100px] border-solid font-poppins md:text-lg md:leading-[27px]">View All Work</Link>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
} 