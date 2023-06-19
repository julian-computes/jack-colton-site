import Link from 'next/link';

type NavLinkProps = {
  href: string;
  text: string;
};

const NavLink = ({href, text}: NavLinkProps) => (
  <Link href={href} className='hover:scale-105 duration-200 my-3'>
    <span>{text}</span>
  </Link>
);

export default function Navbar() {
  return (
    <nav className='sticky top-0 z-30 p-1 bg-white border-red-500'>
      <div className='flex-col p-1 container flex flex-wrap items-center justify-between mx-auto'>
        <Link
          href='/'
          className='mx-5 flex flex-col items-center hover:scale-105 duration-200'
        >
          <span className='text-3xl text-center font-bold mt-5 p-2'>
            Jack Colton
          </span>
          <span className='text-1xl text-center mb-5 p-2'>
            interdisciplinary artist
          </span>
        </Link>

        <NavLink href='/' text='everything'/>
        <NavLink href='/sound' text='sound'/>
        <NavLink href='/visual' text='visual'/>
        <NavLink href='/installation' text='installation'/>
        <NavLink href='/about' text='about'/>
      </div>
    </nav>
  );
}
