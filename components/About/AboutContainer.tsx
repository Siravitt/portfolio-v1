export default function AboutContainer() {
  return (
    <section
      id='about'
      className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'
    >
      <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
        <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>
          About
        </h2>
      </div>
      <div>
        <p className='mb-4'>
          I&apos;m a developer passionate about transforming ideas into
          practical solutions that drive positive change. My work focuses on
          using software to create impactful solutions that not only solve
          problems but also contribute to the betterment of society.
        </p>
        <p className='mb-4'>
          Currently, I&apos;m a Software Engineer at{' '}
          <a
            className='font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300'
            href='https://www.arise.tech/'
            target='_blank'
          >
            Arise by INFINITAS
          </a>
          , I specialize in building and maintaining both front-end and back-end
          systems across various projects, ensuring high-quality performance and
          delivering solutions that meet user needs effectively.
        </p>
        <p className='mb-4'>
          In the past, I&apos;ve had the privilege of working in diverse
          settings, including large corporations and collaborative teams, where
          I contributed to developing software that drives meaningful outcomes.
          My experience has allowed me to hone a versatile skill set and a
          commitment to creating impactful solutions.
        </p>
        <p className='mb-4'>
          Outside of work, I enjoy playing basketball, reading, spending time
          with my family, and constantly seeking new knowledge to improve my
          skills and work.
        </p>
      </div>
    </section>
  );
}
