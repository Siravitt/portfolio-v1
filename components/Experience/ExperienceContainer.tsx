import { EXPERIENCE } from '@/constants/experience';
import ExperienceCard from './ExperienceCard';
import { ArrowUpRight } from 'lucide-react';

export default function ExperienceContainer() {
  return (
    <section
      id='experience'
      className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'
    >
      <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
        <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>
          Experience
        </h2>
      </div>
      <div>
        <ol>
          {EXPERIENCE.map((item, idx) => (
            <ExperienceCard key={idx} experience={item} />
          ))}
        </ol>
        <div className='mt-12'>
          <a
            className='group/link inline-flex items-baseline text-base font-semibold leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300'
            href=''
          >
            <span className='inline-block'>
              View Full{' '}
              <span>
                Résumé
                <ArrowUpRight className='ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none' />
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
