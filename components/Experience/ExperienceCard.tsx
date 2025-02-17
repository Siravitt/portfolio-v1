import { Experience } from '@/constants/experience';
import { ArrowUpRight } from 'lucide-react';
import Badge from '../Badge/Badge';

export default function ExperienceCard({
  experience,
}: {
  experience: Experience;
}) {
  return (
    <li className='mb-12'>
      <div className='group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
        <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
        <header className='z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2'>
          {experience.period}
        </header>
        <div className='z-10 sm:col-span-6'>
          <h3 className='font-medium leading-snug text-slate-200'>
            <a
              className='group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300'
              href={experience.link}
              target='_blank'
            >
              <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
              <span>
                {experience.position} ·{' '}
                <span className='inline-block'>
                  {experience.company}{' '}
                  <ArrowUpRight className='ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none' />
                </span>
              </span>
            </a>
          </h3>
          <p className='mt-2 text-sm leading-normal'>
            {experience.description}
          </p>
          <ul className='mt-2 flex flex-wrap'>
            {experience.technology.map((item, idx) => (
              <li key={idx} className='mr-1.5 mt-2'>
                <Badge tech={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}
