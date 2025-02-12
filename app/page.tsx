import Header from '@/components/Header/Header';

export default function HomePage() {
  return (
    <div className='mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0'>
      <div
        className='pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute'
        // style={{background: radial-gradient(600px at 92px 2711.5px,rgba(29, 78, 216, 0.15), transparent 80%)}}
      ></div>
      <div className='lg:flex lg:justify-between lg:gap-4'>
        <Header />
      </div>
    </div>
  );
}
