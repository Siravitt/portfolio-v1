'use client';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const about = document.getElementById('about');
    const experience = document.getElementById('experience');
    const project = document.getElementById('projects');

    const aboutHeight = about?.offsetHeight || 0;
    const experienceHeight = experience?.offsetHeight || 0;
    const projectHeight = project?.offsetHeight || 0;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition < aboutHeight) {
        setActiveSection('about');
      } else if (
        scrollPosition >= aboutHeight &&
        scrollPosition < aboutHeight + experienceHeight
      ) {
        setActiveSection('experience');
      } else if (
        scrollPosition >= aboutHeight + experienceHeight &&
        scrollPosition < aboutHeight + experienceHeight + projectHeight
      ) {
        setActiveSection('projects');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <nav className='hidden lg:block'>
      <ul className='mt-16 w-max'>
        <li>
          <a
            className={`group flex items-center py-3 ${
              activeSection === 'about' ? 'active' : ''
            }`}
            href='#about'
          >
            <span className='nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>
            <span className='nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'>
              About
            </span>
          </a>
        </li>
        <li>
          <a
            className={`group flex items-center py-3 ${
              activeSection === 'experience' ? 'active' : ''
            }`}
            href='#experience'
          >
            <span className='nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>
            <span className='nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'>
              Experience
            </span>
          </a>
        </li>
        <li>
          <a
            className={`group flex items-center py-3 ${
              activeSection === 'projects' ? 'active' : ''
            }`}
            href='#projects'
          >
            <span className='nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>
            <span className='nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'>
              Projects
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
