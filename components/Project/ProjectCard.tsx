import { Project } from '@/constants/projects';
import { ArrowUpRight } from 'lucide-react';
import Badge from '../Badge/Badge';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <li className='mb-12'>
      <div className='group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
        <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
        <div className='z-10 sm:order-2 sm:col-span-6'>
          <h3>
            <a
              className='group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300'
              href={project.url}
              target='_blank'
            >
              <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
              <span>
                {project.title}
                <span className='inline-block'>
                  <ArrowUpRight className='ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none' />
                </span>
              </span>
            </a>
          </h3>
          <p className='mt-2 text-sm leading-normal'>{project.description}</p>
          {project.technology && (
            <ul className='mt-2 flex flex-wrap'>
              {project.technology.map((tech, idx) => (
                <li key={idx} className='mr-1.5 mt-2'>
                  <Badge tech={tech} />
                </li>
              ))}
            </ul>
          )}
        </div>
        <img
          className='aspect-video rounded border-2 border-slate-200/10 object-cover transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1'
          src={project.imageUrl}
          alt={project.imageAlt}
        />
      </div>
    </li>
  );
}
