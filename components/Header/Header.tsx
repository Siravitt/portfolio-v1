import Navbar from '../Navbar/Navbar';
import NavIcon from '../NavIcon/NavIcon';

export default function Header() {
  return (
    <header className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24'>
      <div>
        <h1 className='text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl'>
          Siravit Tanratanavijit
        </h1>
        <h2 className='mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl'>
          Software Engineer
        </h2>
        <p className='mt-4 max-w-xs leading-normal'>
          I build accessible, pixel-perfect digital experiences for the web.
        </p>
        <Navbar />
      </div>
      <NavIcon />
    </header>
  );
}
