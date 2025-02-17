import AboutContainer from '@/components/AboutContainer/AboutContainer';
import BackgroundHighlight from '@/components/BackgroundHighlight/BackgroundHighlight';
import ExperienceContainer from '@/components/Experience/ExperienceContainer';
import Header from '@/components/Header/Header';
import ProjectContainer from '@/components/Project/ProjectContainer';

export default function HomePage() {
  return (
    <div className='relative'>
      <BackgroundHighlight />
      <div className='mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0'>
        <div className='lg:flex lg:justify-between lg:gap-4'>
          <Header />
          <main className='pt-24 lg:w-[52%] lg:py-24'>
            <AboutContainer />
            <ExperienceContainer />
            <ProjectContainer />
          </main>
        </div>
      </div>
    </div>
  );
}
