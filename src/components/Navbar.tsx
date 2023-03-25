import Link from "next/link";

type NavLinkProps = {
  href: string,
  text: string,
}

const NavLink = ({href, text}: NavLinkProps) => (
  <Link href={href} className='hover:scale-105 duration-200 my-3' >
    <span>{text}</span>
  </Link>
)

export default function Navbar() {
  return (
    <nav className="p-1 bg-white border-gray-200">
      <div className="flex-col p-1 container flex flex-wrap items-center justify-between mx-auto">
        <Link href="/" className="flex items-center hover:scale-105 duration-200">
          <span className="text-3xl text-center font-bold m-5 p-5">Jack Colton</span>
        </Link>
        <NavLink href='/' text='everything' />
        <NavLink href='/sound' text='sound' />
        <NavLink href='/visual' text='visual' />
        <NavLink href='/about' text='about' />
      </div>

    </nav>
  )
}